const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');


const contentProjectDir = path.join(__dirname, '../content/Projects');
const outputProjectFile = path.join(__dirname, '../src/assets/project.data.ts');

const contentBiographyFile = path.join(__dirname, '../content/Biography/chi-sono.md');
const outputBiographyFile = path.join(__dirname, '../src/assets/biography.data.ts')

function buildBiography() {
    console.log("Inizio impacchettamento della biografia...");
    const bioFileRawContent = fs.readFileSync(contentBiographyFile, 'utf-8');

    try {
        const parsed = matter(bioFileRawContent);
        const data = parsed.data;

        const [bodyIt, bodyEn] = parsed.content.split("===EN===");

        if(!bodyEn || bodyEn.trim() === '') {
            throw new Error("Traduzione in inglese assente per la bio!");
        }

        const biography = {
            title: {it: data.title_it, en: data.title_en},
            abstract: {it: data.abstract_it, en: data.abstract_en},
            bodyHtml: {
                it: marked.parse(bodyIt.trim()),
                en: marked.parse(bodyEn.trim())
            }
        }
        
        const tsContent = [
            '// File generato automaticamente dallo script build-biography.cjs - NON MODIFICARE A MANO!!',
            ``,
            `import { Biography } from '../models/biography.interface'`,
            '',
            'export const BIOGRAPHY_DATA: Biography = ' + JSON.stringify(biography, null, 4) + ';'
        ];

        fs.writeFileSync(outputBiographyFile, tsContent.join('\n'));
        console.log("✅ Biografia impacchettata con successo!");
    } catch(err) {
        throw new Error(`❌ Errore nell'impacchettamento della biografia: ${err.message}`)
    }
}

function buildProject() {
    console.log("Inizio impacchettamento dati dei progetti...");

    const files = fs.readdirSync(contentProjectDir).filter(f => f.endsWith('.md'));

    const projectsArray = []; 

    for (const file of files) {
        const rawContent = fs.readFileSync(path.join(contentProjectDir, file), 'utf-8');

        const parsed = matter(rawContent);
        const data = parsed.data;

        const [bodyIt, bodyEn] = parsed.content.split("===EN===");
        
        if(!bodyEn || bodyEn.trim() === '') {
            throw new Error(`Traduzione in inglese assente nel file: ${file}`);
        }

        const project = {
            id: data.id,
            showInHome: data.showInHome || false,
            priority: data.priority || 0,
            size: data.size || 'M',
            technologies: data.technologies || [],
            inPageDemo: data.inPageDemo || '',
            liveUrl: data.liveUrl || '',
            githubUrl: data.githubUrl || '',
            imageUrl: data.imageUrl || '',
            
            title: { it: data.title_it, en: data.title_en },
            abstract: { it: data.abstract_it, en: data.abstract_en },
            
            bodyHtml: { 
                it: marked.parse(bodyIt.trim()), 
                en: marked.parse(bodyEn.trim())
            }
        };
        console.log(`☑️ Impacchettato il file ${file}`)
        projectsArray.push({
            filename: file,
            data: project
        });
    }

    const projectStrings = projectsArray.map(item => {
        const objString = JSON.stringify(item.data, null, 4);
        const indentedObj = objString.split('\n').map(line => '    ' + line).join('\n');
        return `    // OGGETTO GENERATO DALL'ORIGINE: content/${item.filename}\n${indentedObj}`;
    });

    const finalArrayString = `[\n${projectStrings.join(',\n\n')}\n]`;

    const tsContent = [
    '// File generato automaticamente dallo script build-content.cjs - NON MODIFICARE A MANO!!',
    '',
    "import { Project } from '../models/project.interface';",
    '',
    `export const PROJECTS: Project[] = ${finalArrayString};`
    ].join('\n');

    fs.writeFileSync(outputProjectFile, tsContent);

    const pLength = projectsArray.length;

    if (pLength > 0) {
        console.log(`✅ Impacchettati con successo ${pLength} progetti!`);
    } else {
        console.warn("⚠️ Attenzione: nessun file di progetto individuato/tradotto!");
    }
}

buildBiography();
buildProject();
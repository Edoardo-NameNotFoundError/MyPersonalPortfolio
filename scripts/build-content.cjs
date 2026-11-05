const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');


const contentDir = path.join(__dirname, '../content');
const outputFile = path.join(__dirname, '../src/assets/project.data.ts');

function buildProject() {
    console.log("Inizio impacchettamento dati dei progetti...")
    
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
    const projectsArray = []; 

    for (const file of files) {
        const rawContent = fs.readFileSync(path.join(contentDir, file), 'utf-8');

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

    fs.writeFileSync(outputFile, tsContent);

    const pLength = projectsArray.length;

    if (pLength > 0) {
        console.log(`✅ Generati con successo ${pLength} file di traduzione!`);
    } else {
        console.warn("⚠️ Attenzione: nessun file di progetto individuato/tradotto!");
    }
}

buildProject();
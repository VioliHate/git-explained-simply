import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { summary } from "motion/react-client";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "it",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            title: "Git Explained Simply",
            go: "Go To",
          },
          navigation: {
            prev: "Previous slide",
            next: "Next slide",
            tip: "Use keyboard arrows to navigate",
          },
          intro: {
            subtitle:
              "A quick, intuitive guide with silly examples to help you no longer be afraid of the terminal.",
            start: "The journey begins",
          },
          i18n: {
            for: "for",
            humans: "Humans",
          },
          slides: {
            concepts: "What is Git? (Silly Example #{{count}})",
            workflow: "Team Workflow (Silly Example #{{count}})",
            terminal: "The terminal: doesn't bite",
            history: "History",
            time_machine_title_start: "It's like a",
            time_machine_title: "Time Machine",
            time_machine_title_end: "for your files.",
            time_machine_desc:
              'Imagine writing a love letter.\n You write: "You are beautiful".\n Then you change it to: "You are nice".\n Then you regret it and want to go back.\n\n ',
            no_git: "Without Git:",
            no_git_desc: "You have to delete and hope to remember.\n",
            yes_git: "With Git:",
            yes_git_desc:
              'You take a "photo" of each version and go back whenever you want.',
            v1: 'Version 1: "You are beautiful"',
            v2: 'Version 2: "You are nice"',
            save_concept: "The concept of Saving",
            videogame_analogy: "Think of Git as a video game.",
            edit: "Edit",
            edit_desc:
              "You are playing (writing code). You just beat a mini-boss.",
            stage: "Stage (Add)",
            stage_desc:
              "You stop at the save point. You are deciding what to save.",
            commit: "Commit",
            commit_desc:
              'You press "Save Game". Now that moment is carved in stone.',
            base_commands: "Base Commands",
            base_commands_desc: "Few, simple, powerful.",
            share_commands: "Sharing Commands",
            share_commands_desc:
              "Synchronize and collaborate with the remote repository",
            init_title: "Initialize a project",
            init_output:
              "Initialized empty Git repository in /Users/me/project/.git/",
            init_human: '"Hey Git, keep an eye on this folder!"',
            add_title: "Prepare files",
            add_output: "(No output, Git is shy but added everything)",
            add_human: '"Put these files in the box of ready-to-save items."',
            commit_title: "Save (Commit)",
            commit_output_1: "[main (root-commit) 4a2b1c] Added logo",
            commit_output_2: " 1 file changed, 10 insertions(+)",
            commit_human:
              '"Save now and write a label to remember what you did."',
            push_title: "Send online (Push)",
            push_human:
              '"Send everything to the internet so I don\'t lose it if the PC explodes."',
            team_title_start: "Git is like a",
            team_title: "Shared Document",
            team_title_end: "but smarter.",
            team_desc:
              "Imagine writing a book with four hands.\n Everyone has their own copy on their PC.\n",
            team_desc_problem: "The problem:",
            team_desc_problem_resp:
              "How do we not overwrite each other\'s work?\n",
            team_desc_solution: " The solution:",
            team_desc_solution_resp:
              'We use a "Server" (like GitHub) that acts as a referee.',
            referee: "The Referee",
            you: "YOU",
            him: "HIM",
            workflow_title: "The concept of Sharing",
            team_analogy: "Think of teamwork as a shared refrigerator.",
            peek: "Peek (Fetch)",
            peek_desc: "You look if someone put something new in the fridge.",
            take: "Take (Pull)",
            take_desc: "You take the news and add them to your plate.",
            share: "Put (Push)",
            share_desc: "You put your plate in the fridge for others.",
            clone_title: "Download everything (Clone)",
            clone_human:
              '"I want an exact copy of this project on my PC, now!"',
            note: "Note",
            clone_note:
              "`clone` is done only once at the beginning. It's like buying the book.",
            fetch_title: "Check for news (Fetch)",
            fetch_human:
              '"Hey Git, see if my friend uploaded anything new, but don\'t change my files."',
            pull_title: "Download and Merge (Pull)",
            pull_human:
              '"Ok, download the news and merge them immediately with my work."',
            splinter_wisdom: "Splinter's Wisdom",
            splinter_says:
              "To defeat the Foot Clan, we must divide and conquer. Each of you needs your own space to train without hitting your brothers.",
            turtle_mission: "Each Turtle, a Mission",
            turtle_mission_desc:
              "A Branch is like a separate tunnel in the sewers. You can do your thing without blocking the main path.",
            training_tunnel_title: "Training in the Tunnel",
            training_tunnel_desc: "How to move between branches.",
            branch_command_title: "Create your tunnel",
            branch_command_human:
              "I'm going to work on this specific task in my own space.",
            switch_branch: "Switch tunnel",
            switch_branch_human:
              "I\'m going back to the Lair to see the Master Plan.",
          },
          summary: {
            title: "Summary for lazy people #{{count}}",
            init_title: "Create the warehouse",
            init_desc: "Start tracking files.",
            add_title: "Prepare the package",
            add_desc: "Choose what to save.",
            commit_title: "Close the package",
            commit_desc: "Save with a message.",
            push_title: "Ship the package",
            push_desc: "Send everything to GitHub.",
            mission_title: "Mission Accomplished!",
            mission_desc:
              "You learned the basics of managing your projects like a pro. No more lost files or confused versions!",
            team_clone_title: "Grab the map",
            team_clone_desc: "Get your initial copy for the adventure.",
            team_fetch_title: "Peek",
            team_fetch_desc:
              "Check from afar if there are new points of interest on the master map.",
            team_pull_title: "Update the map",
            team_pull_desc:
              "Download and merge your map with others' discoveries",
            team_push_title: "Mark the treasure",
            team_push_desc: "Add your 'X' to the shared map",
            team_title: "Now you are a Team Player!",
            team_desc:
              "You know how to work alone and how to collaborate with an entire team without making disasters",
          },
          game: {
            summary: "Mini-Game",
            basics_title: "The Sentient Toaster",
            basics_desc:
              "Help a toaster having an existential crisis save his thoughts before he burns himself!",
            branching_title: "Ninja Training",
            branching_desc: "Master the art of branching and merging!",
            level: {
              complete: "MISSION COMPLETE! 🏆",
              basic_complete: "CRUNCHYNESSIS SAFE!",
              branching_complete: "COWABUNGA! 🐢",
              basic: {
                step1: {
                  story:
                    "Mission: Your toaster has become conscious and is writing a file. Initialize a Git repository to save its first thoughts.",
                  hint: "Create the warehouse for the toaster's thoughts.",
                },
                step2: {
                  story:
                    "The toaster created a file called pensieri-croccanti.txt. Add it to the staging area.",
                  hint: "Put your thoughts in the box.",
                },
                step3: {
                  story:
                    "Commit with a message that respects the toaster's thinking.",
                  hint: "Save the crunch.",
                },
                step4: {
                  story:
                    "Send your toaster file to the cloud so it can live forever (or until the next power surge).",
                  hint: "Load the thought of the toaster.",
                },
              },
            },
          },
          turtle: {
            mikey: "Mikey",
            raph: "Raph",
            donnie: "Donnie",
            leo: "Leo",
          },
        },
      },
      it: {
        translation: {
          header: {
            title: "Git Spiegato Facile",
            go: "Vai a",
          },
          navigation: {
            prev: "Slide precedente",
            next: "Slide successiva",
            tip: "Usa le frecce della tastiera per navigare",
          },
          intro: {
            subtitle:
              'Una guida veloce, intuitiva e con esempi "scemi" per non aver più paura del terminale.',
            start: "Inizia il viaggio",
          },
          i18n: {
            for: "per",
            humans: "Umani",
          },
          slides: {
            concepts: "Cos'è Git? (Esempio Scemo #{{count}})",
            workflow: "Workflow di Squadra (Esempio Scemo #{{count}})",
            terminal: "Il terminale: non morde!",
            history: "Cronologia",
            time_machine_title_start: "È come una",
            time_machine_title: "Macchina del Tempo",
            time_machine_title_end: "per i tuoi file.",
            time_machine_desc:
              'Immagina di scrivere una lettera d\'amore.\nScrivi: "Sei bellissima".\nPoi cambi in: "Sei simpatica".\nPoi ti penti e vuoi tornare indietro.\n\n',
            no_git: "Senza Git:",
            no_git_desc: "Devi cancellare e sperare di ricordare.\n",
            yes_git: "Con Git:",
            yes_git_desc:
              'Fai una "foto" a ogni versione e torni indietro quando vuoi.',
            v1: 'Versione 1: "Sei bellissima"',
            v2: 'Versione 2: "Sei simpatica"',
            save_concept: "Il concetto del Salvataggio",
            videogame_analogy: "Pensa a Git come a un videogioco.",
            edit: "Modifica",
            edit_desc:
              "Stai giocando (scrivendo codice). Hai appena battuto un mini-boss.",
            stage: "Stage (Add)",
            stage_desc:
              "Ti fermi davanti al punto di salvataggio. Stai decidendo cosa salvare.",
            commit: "Commit",
            commit_desc:
              'Premi "Salva Partita". Ora quel momento è scolpito nella pietra.',
            base_commands: "I Comandi Base",
            base_commands_desc: "Pochi, semplici, potenti.",
            share_commands: "Comandi di Condivisione",
            share_commands_desc:
              "Sincronizza e collabora con il repository remoto",
            init_title: "Inizializzare un progetto",
            init_output:
              "Initialized empty Git repository in /Users/me/progetto/.git/",
            init_human: '"Ehi Git, tieni d\'occhio questa cartella!"',
            add_title: "Preparare i file",
            add_output: "(Nessun output, Git è timido ma ha aggiunto tutto)",
            add_human:
              '"Metti questi file nella scatola dei pronti per il salvataggio."',
            commit_title: "Salvare (Commit)",
            commit_output_1: "[main (root-commit) 4a2b1c] Ho aggiunto il logo",
            commit_output_2: " 1 file changed, 10 insertions(+)",
            commit_human:
              '"Salva ora e scrivi un\'etichetta per ricordarti cosa hai fatto."',
            push_title: "Mandare online (Push)",
            push_human:
              '"Manda tutto su internet così non lo perdo se il PC esplode."',
            team_title_start: "Git è come un",
            team_title: "Documento Condiviso",
            team_title_end: "ma più intelligente.",
            team_desc:
              "Immagina di scrivere un libro a quattro mani.\n Ognuno ha la sua copia sul proprio PC.\n",
            team_desc_problem: "Il problema:",
            team_desc_problem_resp:
              "Come facciamo a non sovrascrivere il lavoro dell'altro?\n",
            team_desc_solution: " La soluzione:",
            team_desc_solution_resp:
              'Usiamo un "Server" (come GitHub) che fa da arbitro.',
            referee: "L'Arbitro",
            you: "TU",
            him: "LUI",
            workflow_title: "Il concetto della Condivisione",
            team_analogy:
              "Pensa al lavoro di squadra come a un frigorifero condiviso.",
            peek: "Sbircia (Fetch)",
            peek_desc:
              "Guardi se qualcuno ha messo qualcosa di nuovo nel frigo.",
            take: "Prendi (Pull)",
            take_desc: "Prendi le novità e le aggiungi al tuo piatto.",
            share: "Metti (Push)",
            share_desc: "Metti il tuo piatto nel frigo per gli altri.",
            clone_title: "Scaricare tutto (Clone)",
            clone_human:
              '"Voglio una copia esatta di questo progetto sul mio PC, ora!"',
            note: "Nota",
            clone_note:
              "`clone` si fa una volta sola all'inizio. È come comprare il libro.",
            fetch_title: "Controllare novità (Fetch)",
            fetch_human:
              '"Ehi Git, guarda se il mio amico ha caricato qualcosa di nuovo, ma non cambiare i miei file."',
            pull_title: "Scaricare e Unire (Pull)",
            pull_human:
              '"Ok, scarica le novità e uniscile subito al mio lavoro."',
            splinter_wisdom: "La Saggezza di Splinter",
            splinter_says:
              "Per sconfiggere il Clan del Piede, dobbiamo dividere e conquistare. Ognuno di voi ha bisogno del proprio spazio per allenarsi senza colpire i fratelli.",
            turtle_mission: "Ogni Tartaruga, una Missione",
            turtle_mission_desc:
              "Un Branch è come un tunnel separato nelle fogne. Puoi fare le tue cose senza bloccare il percorso principale.",
            training_tunnel_title: "Allenamento nel Tunnel",
            training_tunnel_desc: "Come spostarsi tra i branch.",
            branch_command_title: "Crea il tuo tunnel",
            branch_command_human:
              "Lavorerò su questo compito specifico nel mio spazio personale.",
            switch_branch: "Spostati di tunnel",
            switch_branch_human: "Torno al Rifugio per vedere il Piano Maestro",
          },
          summary: {
            title: "Riassunto per pigri #{{count}}",
            init_title: "Crea il magazzino",
            init_desc: "Inizia a tracciare i file.",
            add_title: "Prepara il pacco",
            add_desc: "Scegli cosa salvare.",
            commit_title: "Chiudi il pacco",
            commit_desc: "Salva con un messaggio.",
            push_title: "Spedisci il pacco",
            push_desc: "Manda tutto su GitHub.",
            mission_title: "Missione Compiuta!",
            mission_desc:
              "Hai imparato le basi per gestire i tuoi progetti come un vero professionista. Niente più file persi o versioni confuse!",
            team_clone_title: "Prendi la mappa",
            team_clone_desc: "Ottieni la tua copia iniziale per l'avventura.",
            team_fetch_title: "Sbircia",
            team_fetch_desc:
              "Guarda da lontano se ci sono nuovi punti d'interesse sulla mappa principale.",
            team_pull_title: "Aggiorna la mappa",
            team_pull_desc:
              "Scarichi e unisci la tua mappa con le scoperte degli altri",
            team_push_title: "Segna il tesoro",
            team_push_desc: "Aggiungi la tua 'X' alla mappa condivisa",
            team_title: "Ora sei un Team Player!",
            team_desc:
              "Sai come lavorare da solo e come collaborare con un intero team senza fare disastri.",
          },
          game: {
            summary: "Mini-Gioco",
            basics_title: "Il Tostapane Senziente",
            basics_desc:
              "Aiuta un tostapane in piena crisi esistenziale a salvare i suoi pensieri prima che si bruci!",
            branching_title: "Allenamento Ninja",
            branching_desc: "Domina l'arte dei branch e del merge!",
            level: {
              complete: "MISSIONE COMPIUTA! 🏆",
              basic_complete: "LA CROCCANTEZZA È SALVA!",
              branching_complete: "COWABUNGA! 🐢",
              basic: {
                step1: {
                  story:
                    "Missione: Il tuo tostapane ha preso coscienza e sta scrivendo un file. Inizializza un repository Git per salvare i suoi primi pensieri.",
                  hint: "Crea il magazzino per i pensieri del tostapane.",
                },
                step2: {
                  story:
                    "Il tostapane ha scritto un file chiamato pensieri-croccanti.txt. Aggiungilo all'area di stage.",
                  hint: "Metti i pensieri nella scatola.",
                },
                step3: {
                  story:
                    "Fai il commit con un messaggio che rispetti il pensiero del tostapane.",
                  hint: "Salva la croccantezza.",
                },
                step4: {
                  story:
                    "Invia il file del tostapane nel cloud così potrà vivere per sempre (o fino al prossimo sbalzo di corrente).",
                  hint: "Carica il pensiero del tostapane.",
                },
              },
              branching: {
                step1: {
                  story:
                    "Missione: Michelangelo vuole provare un nuovo condimento. Crea un nuovo branch chiamato 'feat/pizza'",
                  hint: "Crea un nuovo tunnel per la tua missione.",
                },
                step2: {
                  story: "Aggiungi l'ananas e salva i tuoi progressi.",
                  hint: "Salva le modifiche nel nuovo branch.",
                },
                step3: {
                  story:
                    "Torna al branch main per mostrare il tuo lavoro alla squadra.",
                  hint: "Torna al rifugio principale.",
                },
                step4: {
                  story: "Unisci il branch della pizza nel main. Cowabunga!",
                  hint: "Unisci la tua missione nel piano maestro.",
                },
              },
            },
          },
          turtle: {
            mikey: "Michelangelo",
            raph: "Raffaello",
            donnie: "Donatello",
            leo: "Leonardo",
          },
        },
      },
    },
  });

export default i18n;

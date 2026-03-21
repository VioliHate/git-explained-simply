import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
            save_share: "Save and Share",
            history: "History",
            summary_title: "Summary for lazy people #{{count}}",
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
            sum_init_title: "Create the warehouse",
            sum_init_desc: "Start tracking files.",
            sum_add_title: "Prepare the package",
            sum_add_desc: "Choose what to save.",
            sum_commit_title: "Close the package",
            sum_commit_desc: "Save with a message.",
            sum_push_title: "Ship the package",
            sum_push_desc: "Send everything to GitHub.",
            mission_complete: "Mission Accomplished!",
            mission_desc:
              "You learned the basics of managing your projects like a pro. No more lost files or confused versions!",
            team_title: "Git is like a Shared Document but smarter.",
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
            sum_clone_title: "Initial Copy",
            sum_clone_desc: "Download the project for the first time.",
            sum_fetch_title: "Peek",
            sum_fetch_desc: "Look if there are news without downloading them.",
            sum_pull_title: "Update",
            sum_pull_desc: "Download and merge news to your code.",
            team_summary_desc:
              "You know how to work alone and how to collaborate with an entire team without making disasters.",
            restart: "Restart from the beginning",
          },
        },
      },
      it: {
        translation: {
          header: {
            title: "Git Spiegato Facile",
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
            save_share: "Salva e Condividi",
            history: "Cronologia",
            summary_title: "Riassunto per pigri #{{count}}",
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
            sum_init_title: "Crea il magazzino",
            sum_init_desc: "Inizia a tracciare i file.",
            sum_add_title: "Prepara il pacco",
            sum_add_desc: "Scegli cosa salvare.",
            sum_commit_title: "Chiudi il pacco",
            sum_commit_desc: "Salva con un messaggio.",
            sum_push_title: "Spedisci il pacco",
            sum_push_desc: "Manda tutto su GitHub.",
            mission_complete: "Missione Compiuta!",
            mission_desc:
              "Hai imparato le basi per gestire i tuoi progetti come un vero professionista. Niente più file persi o versioni confuse!",
            team_title:
              "Git è come un Documento Condiviso ma più intelligente.",
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
            sum_clone_title: "Copia Iniziale",
            sum_clone_desc: "Scarichi il progetto per la prima volta.",
            sum_fetch_title: "Sbircia",
            sum_fetch_desc: "Guardi se ci sono novità senza scaricarle.",
            sum_pull_title: "Aggiorna",
            sum_pull_desc: "Scarichi e unisci le novità al tuo codice.",
            team_summary_desc:
              "Sai come lavorare da solo e come collaborare con un intero team senza fare disastri.",
            restart: "Ricomincia dall'inizio",
          },
        },
      },
    },
  });

export default i18n;

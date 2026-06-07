/* Catalogue OSCE Pharmacie — fichier de base.
   35 cas. Regénéré le 2026-06-07. */

const CASES = [
  {
    "id": "brulure-bebe",
    "plainte": "Brûlure",
    "variant": "Cas 1",
    "opening": "Bonjour, je viens pour une crème anti-brûlure pour ma voisine.",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Le bébé de 10 mois de ma voisine."
      },
      {
        "q": "Poids",
        "a": "Il pèse 9 kg."
      },
      {
        "q": "Comment ?",
        "a": "La maman tenait le bébé en sortant le plat du four ; le poignet a cogné le plat chaud."
      },
      {
        "q": "État ?",
        "a": "A un peu pleuré sur le coup, maintenant il va bien."
      },
      {
        "q": "Aspect ?",
        "a": "C'est rouge, pas de cloques, pas de zone blanche ni noire."
      },
      {
        "q": "Surface ?",
        "a": "Inférieure à une pièce de 2 €."
      },
      {
        "q": "Depuis ?",
        "a": "C'est arrivé il y a 1 heure."
      },
      {
        "q": "Actions ?",
        "a": "Main passée sous l'eau froide, environ 5 minutes."
      },
      {
        "q": "Médicaments ?",
        "a": "Aucun médicament en cours."
      },
      {
        "q": "Question",
        "a": "Doit-elle mettre un pansement sur la crème que vous proposez ?"
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Demande qui est le patient ? (bébé de 10 mois)"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Comment c'est arrivé ?",
              "Questionne la maltraitance / 1ère fois",
              "Demande le type de brûlure (thermique)",
              "Évalue le degré (1er degré car rouge)",
              "Évalue la surface (<5%) et la localisation",
              "Évalue l'étendue (< 2 €)"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Pose la question de la durée/depuis quand ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Demande les actions entreprises ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Demande l'historique médicamenteux ?"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Annonce qu'il peut prendre en charge",
          "Ou réfère vers un médecin si nécessaire"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Bien refroidir la brûlure (règle 15/15/15)",
              "Surtout ne pas mettre de glace",
              "Hygiène des mains pour le traitement",
              "Proposer un hydrogel (ex. Flamigel)",
              "Appliquer jusqu'à disparition de la rougeur",
              "Pansement non obligatoire",
              "Protéger du soleil pendant 1 an"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Paracétamol si douleurs",
              "Ibuprofène si insuffisant"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Surveiller l'état général les jours/semaines suivants",
              "Consulter médecin si altération de l'état général",
              "Consulter médecin si mauvaise cicatrisation"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "brulure-adulte",
    "plainte": "Brûlure",
    "variant": "Cas 2",
    "opening": "Bonjour, je me suis brûlé en allumant le barbecue. Puis-je avoir de la Flammazine ?",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Oui c'est pour moi, homme de 50 ans."
      },
      {
        "q": "Localisation ?",
        "a": "Le bas de la cuisse."
      },
      {
        "q": "Surface ?",
        "a": "Moins d'une demi-paume de main."
      },
      {
        "q": "Aspect ?",
        "a": "Rouge avec des cloques, un peu douloureux."
      },
      {
        "q": "Tétanos ?",
        "a": "Je ne me souviens plus de la date de mon dernier vaccin tétanos."
      },
      {
        "q": "Depuis ?",
        "a": "C'est arrivé hier soir."
      },
      {
        "q": "Actions ?",
        "a": "J'ai rapidement passé sous l'eau très froide."
      },
      {
        "q": "Médicaments ?",
        "a": "Metformine 500, Asaflow, Lisinopril 20, Toujeo, Lorazépam 2,5."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Demande qui est le patient ? (homme, 50 ans)",
              "Vérifie le statut vaccinal tétanos"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Comment c'est arrivé ?",
              "Questionne le risque d'infection",
              "Identifie le type (thermique)",
              "Évalue le degré (2e degré : rouge + cloques)",
              "Évalue la surface (<10%) et la localisation",
              "Évalue l'étendue (< ½ paume)"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Pose la question de la durée/depuis quand ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Demande les actions entreprises ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Relève l'historique médicamenteux ? (présence de metformine)"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Peut prendre en charge",
          "Réfère au médecin (statut vaccinal / rappel tétanos)"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Bien refroidir la brûlure (règle 15/15/15)",
              "Surtout ne pas mettre de glace",
              "Hygiène des mains pour le traitement",
              "Proposer un hydrogel (ex. Flamigel)",
              "Flammazine sans intérêt clinique démontré (moins efficace qu'un hydrogel)",
              "Appliquer jusqu'à disparition de la rougeur",
              "Pansement non obligatoire",
              "Ne pas percer les cloques",
              "Protéger du soleil pendant 1 an"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Paracétamol si douleurs",
              "Ibuprofène si insuffisant"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Surveiller l'état général les jours/semaines suivants",
              "Consulter médecin si altération de l'état général",
              "Consulter médecin si mauvaise cicatrisation",
              "Vigilance : diabétique, plus à risque de complications"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "hemorroides-1",
    "plainte": "Hémorroïdes",
    "variant": "Cas 1",
    "opening": "Bonjour, je pense avoir des hémorroïdes. Pouvez-vous me donner quelque chose ? C'est assez douloureux.",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Patient de 53 ans, chauffeur de bus."
      },
      {
        "q": "Poids ?",
        "a": "Corpulence normale, pas de surpoids."
      },
      {
        "q": "Symptômes ?",
        "a": "Douleur surtout assis (toute la journée), parfois un peu de sang sur le papier."
      },
      {
        "q": "Selles ?",
        "a": "Selles peut-être plus foncées, je ne regarde pas trop."
      },
      {
        "q": "Depuis ?",
        "a": "Environ 10 jours."
      },
      {
        "q": "Antécédents ?",
        "a": "Déjà eu ça, jamais diagnostiqué chez le médecin."
      },
      {
        "q": "Actions ?",
        "a": "Rien, je pensais que ça allait passer."
      },
      {
        "q": "Signes généraux ?",
        "a": "Pas de perte de poids, pas de fatigue, pas de prurit."
      },
      {
        "q": "Transit ?",
        "a": "J'alterne constipation et diarrhée, plutôt des selles liquides."
      },
      {
        "q": "Dépistage ?",
        "a": "Jamais de colotest ni de coloscopie, je ne vais pas souvent chez le médecin."
      },
      {
        "q": "Boissons ?",
        "a": "Beaucoup de coca, peu d'eau."
      },
      {
        "q": "Médicaments ?",
        "a": "Du tadalafil de temps en temps."
      },
      {
        "q": "Demande",
        "a": "En attendant le médecin, je veux bien quelque chose pour soulager."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Demande l'âge",
              "Questionne la perte de poids",
              "Questionne le sport / la sédentarité",
              "Antécédent de cancer colorectal",
              "Pas de maladie inflammatoire intestinale"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "1ère fois ?",
              "Présence de sang ?",
              "Selles noires ?",
              "Douleur ?",
              "Prurit ?",
              "Transit lent (constipation) ?",
              "Fatigue ?",
              "Habitudes alimentaires / alcool / épices ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Demande les actions entreprises ?",
              "1er diagnostic posé par un médecin ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Demande les autres médicaments ?"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Délivre une crème type vaseline avant consult (Fitoroïd, Cose-protect, vaseline …)",
          "Proposer un colotest",
          "Colotest à faire quand plus de saignement",
          "NE PAS proposer de crème aux corticoïdes (car présence de sang)",
          "Renvoi vers le médecin (> 50 ans)"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Lutter contre la constipation : Bien s'hydrater",
              "Éviter le coca et les aliments irritants",
              "Limiter le temps aux toilettes, éviter les poussées (tabouret)"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Appliquer la crème 2 à 3×/jour",
              "Lutter contre la constipation : Fibres, laxatifs doux",
              "Douleur : paracétamol 1er choix ou ibuprofène",
              "Veinotoniques peu efficaces"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Amélioration attendue sous 7 jours"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "hemorroides-2",
    "plainte": "Hémorroïdes",
    "variant": "Cas 2",
    "opening": "Bonjour, j'ai des hémorroïdes et je suis enceinte (3e trimestre). Que puis-je prendre pour accélérer la guérison ?",
    "answers": [
      {
        "q": "Transit ?",
        "a": "Je suis constipée."
      },
      {
        "q": "Grossesse ?",
        "a": "3e trimestre."
      },
      {
        "q": "Sport ?",
        "a": "Je ne fais plus beaucoup de sport."
      },
      {
        "q": "Sang ?",
        "a": "Pas de sang."
      },
      {
        "q": "Douleur ?",
        "a": "Surtout quand je vais à selles."
      },
      {
        "q": "Antécédents ?",
        "a": "J'ai déjà eu ça lors de ma première grossesse."
      },
      {
        "q": "Demande",
        "a": "Je voudrais aussi des comprimés, pas seulement une crème."
      },
      {
        "q": "Ibuprofène ?",
        "a": "J'ai de l'ibuprofène à la maison, je peux en prendre pour la douleur ?"
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Questionne la perte de poids",
              "Questionne le sport / la sédentarité",
              "Antécédent de cancer colorectal",
              "Pas de maladie inflammatoire intestinale ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "1ère fois ?",
              "Présence de sang ?",
              "Selles noires ?",
              "Douleur ?",
              "Prurit ?\nPrurit ?",
              "Transit lent (constipation) ?",
              "Fatigue ?",
              "Habitudes alimentaires / épices ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Demande les actions entreprises ?",
              "1er diagnostic posé par un médecin ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Demande les autres médicaments ?"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Délivre une crème type vaseline",
          "Délivre une crème corticoïde (car pas de sang)"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Lutter contre la constipation : Bien s'hydrater",
              "Éviter le coca et les aliments irritants",
              "Limiter le temps aux toilettes, éviter les poussées (tabouret)"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Appliquer la crème 2 à 3×/jour (si vaseline)",
              "Ou Trianal 3×/j ou Scheriproct 2×/j",
              "Corticoïde : max 1–2 semaines",
              "Lutter contre la constipation : Fibres, laxatifs doux",
              "Douleur : paracétamol 1er choix",
              "Surtout pas d'ibuprofène",
              "Veinotoniques peu efficaces",
              "Venoruton possible au 3e trimestre"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Amélioration sous 7 jours, sinon médecin"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "yeux-secs-1",
    "plainte": "Yeux secs",
    "variant": "Cas 1",
    "opening": "Bonjour, j'ai une sensation de saleté dans les yeux depuis quelques jours (homme de 45 ans, sans antécédent). Pas de sécrétion, ni de croûtes, ni de douleur. Pouvez-vous me délivrer un collyre pour désinfecter ?",
    "answers": [
      {
        "q": "Allergie ?",
        "a": "Non, pas de rhume ni d'antécédent d'allergie."
      },
      {
        "q": "Lentilles ?",
        "a": "Non, pas de lentilles de contact."
      },
      {
        "q": "Écrans ?",
        "a": "Fin du télétravail depuis 1 mois, plus de 5 h/j devant l'ordinateur."
      },
      {
        "q": "Pathologies ?",
        "a": "Pas de glaucome ni autre pathologie oculaire."
      },
      {
        "q": "Actions ?",
        "a": "J'ai essayé le sérum physiologique, pas assez efficace."
      },
      {
        "q": "Médicaments ?",
        "a": "Aucun (parfois du Nustasium pour bien dormir)."
      },
      {
        "q": "Ophtalmo ?",
        "a": "Pas de consultation ophtalmo."
      },
      {
        "q": "Fréquence ?",
        "a": "Surtout si air sec et écran, plus fréquent en hiver."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Demande l'âge / le sexe",
              "Porteur de lentilles ?",
              "Travail sur ordinateur ?",
              "Allergie aux pollens ?",
              "Autres pathologies (diabète, maladie auto-immune) ?",
              "Opération récente ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Picotement, larmoiement, rougeur, grain de sable (Ok)",
              "Rougeur importante ?",
              "Douleur ?",
              "Troubles de la vision ?",
              "Photophobie importante ?",
              "Infection (croûtes/pus) ou vésicules ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ?",
              "Demande la fréquence (chronique ?)"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Demande les actions entreprises",
              "Actions entreprise ? Si chronique : consultation ophtalmo ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres médicaments ? (anticholinergiques, hormones, rétinoïdes, collyres …)"
            ]
          }
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Choix",
            "subs": [
              "Collyre en journée (peu importe le choix)",
              "En plus : gel / pommade la nuit"
            ]
          },
          {
            "label": "Posologie, objectif traitement",
            "subs": [
              "Posologie : 1×/h ou à la demande",
              "Objectif : soulagement immédiat"
            ]
          },
          {
            "label": "Administration collyre",
            "subs": [
              "Administration : se laver les mains",
              "Tirer la paupière inférieure, regarder vers le haut",
              "Instiller 1 goutte (éviter le contact embout/œil)",
              "Garder l'œil fermé + presser le canal lacrymal",
              "Précaution : durée de conservation"
            ]
          },
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Limiter les écrans",
              "Règle des 20-20-20",
              "Bien s'hydrater (min 1,5 L)",
              "Hygiène des paupières si symptômes persistants"
            ]
          },
          {
            "label": "Gestion médicaments",
            "subs": [
              "Limiter le Nustasium",
              "Médecin si aggravation ou pas d'amélioration"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "yeux-secs-2",
    "plainte": "Yeux secs",
    "variant": "Cas 2",
    "opening": "Bonjour, je viens chercher des gouttes pour mes yeux secs (jeune femme de 27 ans).",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Oui pour moi, j'ai 27 ans."
      },
      {
        "q": "Lentilles ?",
        "a": "Oui, lentilles souples mensuelles, habituellement bien supportées."
      },
      {
        "q": "Écrans ?",
        "a": "Oui, je prépare un rapport de thèse, minimum 8 h/j."
      },
      {
        "q": "Allergie ?",
        "a": "Non, pas que je sache."
      },
      {
        "q": "Pathologies ?",
        "a": "Aucune."
      },
      {
        "q": "Tabac ?",
        "a": "Non."
      },
      {
        "q": "Symptômes ?",
        "a": "Yeux secs et fatigués (grain de sable dans l'oeil), un peu rouges."
      },
      {
        "q": "Rougeur ?",
        "a": "Non."
      },
      {
        "q": "Troubles de la vision ?",
        "a": "Non."
      },
      {
        "q": "Photophobie ?",
        "a": "Non."
      },
      {
        "q": "Infection ?",
        "a": "Pas de croûtes ni de pus."
      },
      {
        "q": "Depuis ?",
        "a": "Depuis ma thèse, environ 2 semaines."
      },
      {
        "q": "Actions ?",
        "a": "Thealoz Duo 1×/j le matin : ça soulage mais ça ne dure pas. Je dois en mettre tous les jours"
      },
      {
        "q": "Médicaments ?",
        "a": "Roaccutane 20 (acné, 1×/j depuis 1 mois), Noranelle 30 (3 ans), Nustasium 1/2 comprimé si insomnie."
      },
      {
        "q": "Aggravation ?",
        "a": "Peut-être depuis le Roaccutane, comme ma peau plus sèche."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Porteur de lentilles ?",
              "Travail sur ordinateur Travail sur ordinateur ?",
              "Allergie aux pollens ?",
              "Autres pathologies (diabète, maladie auto-immune) ?",
              "Opération récente ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Picotement, larmoiement, rougeur, grain de sable (Ok)",
              "Rougeur importante ?",
              "Douleur ?",
              "Troubles de la vision ?",
              "Photophobie importante ?",
              "Infection (croûtes/pus) / vésicules ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ?",
              "Demande la fréquence ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises + résultat ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres médicaments ? (+ fréquence du Nustasium)"
            ]
          }
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Choix",
            "subs": [
              "Collyre en journée (Thealoz OK)",
              "En plus : gel / pommade la nuit (plusieurs facteurs de risque)",
              "Sans conservateurs (port de lentilles) — Thealoz OK"
            ]
          },
          {
            "label": "Posologie, objectif traitement",
            "subs": [
              "Posologie : 1×/h ou à la demande",
              "Objectif : soulagement immédiat"
            ]
          },
          {
            "label": "Administration du collyre ?",
            "subs": [
              "Se laver les mains",
              "Tirer la paupière inférieure, regarder vers le haut",
              "Instiller 1 goutte (éviter le contact embout/œil)",
              "Garder l'œil fermé + presser le canal lacrymal",
              "Précaution : durée de conservation"
            ]
          },
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Éviter les lentilles si possible (surtout sous Roaccutane)",
              "Limiter les écrans",
              "Règle des 20-20-20",
              "Bien s'hydrater (min 1,5 L)",
              "Hygiène des paupières si persistance (chauffer, masser, nettoyer)"
            ]
          },
          {
            "label": "Gestion médicaments",
            "subs": [
              "Roaccutane : importance de l'hydratation peau et yeux",
              "Pilule : ne pas l'arrêter (prise de Roaccutane)",
              "Éviter le Nustasium"
            ]
          },
          {
            "label": "Suvi",
            "subs": [
              "Médecin si aggravation / pas d'amélioration",
              "Aborder la sécheresse oculaire à la prochaine consult dermato"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "rhinite-1",
    "plainte": "Rhinite allergique",
    "variant": "Cas 1",
    "opening": "Bonjour, pouvez-vous me donner un anti-allergique à prendre avant d'aller jardiner ? Je voudrais un traitement qui me soulage vite.",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Homme de 35 ans, sans antécédent médical connu."
      },
      {
        "q": "Symptômes ?",
        "a": "À la tonte du jardin : éternuements, nez parfois bouché, yeux qui pleurent. Pas de fièvre,  ni douleur, ni respiration sifflante."
      },
      {
        "q": "Respiration ?",
        "a": "Globalement bonne, un peu difficile ce week-end, mais c'est passé."
      },
      {
        "q": "Depuis ?",
        "a": "1 semaine, depuis le beau temps et la tonte (+++ ce week-end, yeux rouges, gonflés et ça chatouille)."
      },
      {
        "q": "Récurrence ?",
        "a": "Oui, chaque année plus ou moins à la même période."
      },
      {
        "q": "Actions ?",
        "a": "Rien, je pensais que ça ne durerait pas."
      },
      {
        "q": "Médicaments ?",
        "a": "Aucun, du paracétamol de temps en temps."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Quoi ?",
            "subs": [
              "Yeux qui grattent / qui coulent ?",
              "Nez : chatouille / éternuements / encombrement ?",
              "Gorge : symptômes ?",
              "Signaux d'alarme (fièvre, respiration sifflante…) ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ?",
              "Récurrence ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres traitements ?"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Prise en charge à l'officine"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Rincer yeux/nez au sérum physiologique",
              "Ne pas laisser pendre le linge dehors",
              "Se laver les cheveux le soir",
              "Aérer < 5-10 min/j"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Anti-H1 : cétirizine ou loratadine 1×/j le soir",
              "Ou Allegratab 1×/j",
              "Ou azélastine collyre 1 goutte 2×/j (Livostin/Allergodil)",
              "Ou azélastine spray nasal 1 dose 2×/j",
              "Ou cétirizine per os + anti-H1 collyre/spray en complément (ok aussi)"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "rhinite-2",
    "plainte": "Rhinite allergique",
    "variant": "Cas 2",
    "opening": "Bonjour, Gérard vous demande un remède efficace pour son rhume des foins qui recommence. Un traitement qui le couvre pour la saison et le soulage vite.",
    "answers": [
      {
        "q": "Symptômes ?",
        "a": "Rhume des foins : yeux qui pleurent, gorge qui gratte, éternuements, nez qui chatouille."
      },
      {
        "q": "Signaux d'alarme ?",
        "a": "Pas de température."
      },
      {
        "q": "Depuis ?",
        "a": "4-5 jours, depuis la tonte. Chaque année, ce n'est pas la première fois."
      },
      {
        "q": "Actions ?",
        "a": "Rien à la maison. Les autres années : un comprimé, parfois un spray nasal."
      },
      {
        "q": "Médicaments ?",
        "a": "Inuvair Nexthaler (asthme)."
      },
      {
        "q": "Asthme ?",
        "a": "Oui j'ai de l'asthme, mais bien contrôlé, pas recours au traitement de secours récemment ni de réveil nocturne."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Quoi ?",
            "subs": [
              "Asthme : stable ? respiration sifflante ?",
              "Yeux qui grattent / qui coulent ?",
              "Nez : chatouille / éternuements / encombrement ?",
              "Gorge : symptômes ?",
              "Signaux d'alarme (fièvre, respiration sifflante…) ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ?",
              "Récurrence ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres traitements (DPP) ?"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Prise en charge à l'officine"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Rincer yeux/nez au sérum physiologique",
              "Ne pas laisser pendre le linge dehors",
              "Se laver les cheveux le soir",
              "Aérer < 5-10 min/j"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Mométasone (Momepax) : traitement de fond",
              "Agiter le flacon avant emploi",
              "1 à 2 doses/narine, matin ou soir",
              "Pas vers la cloison nasale (éviter irritations/saignements)",
              "Durée : le temps de contact avec l'allergène",
              "Effet non immédiat (min 4 jours), maximal vers J15",
              "En attendant : anti-H1 cétirizine/loratadine 1×/j le soir",
              "Ou Allegratab 1×/j",
              "Ou azélastine collyre 1 goutte 2×/j (Livostin/Allergodil)",
              "Ou azélastine spray nasal 1 dose 2×/j",
              "Ou cétirizine per os + anti-H1 collyre/spray"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "gorge-1",
    "plainte": "Mal de gorge",
    "variant": "Cas 1",
    "opening": "Bonjour, j'ai mal à la gorge. Pouvez-vous me donner quelque chose ? C'est assez douloureux.",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Patiente de 28 ans (65 kg), maman d'un enfant de 18 mois en crèche."
      },
      {
        "q": "Grossesse ?",
        "a": "Enceinte, 1er trimestre (10 semaines d'aménorrhée)."
      },
      {
        "q": "Douleur ?",
        "a": "Assez intense, j'ai vraiment du mal à avaler."
      },
      {
        "q": "Fièvre ?",
        "a": "37,9 °C, ce n'est pas vraiment de la fièvre, si ?"
      },
      {
        "q": "Depuis ?",
        "a": "Depuis 2 jours."
      },
      {
        "q": "Actions ?",
        "a": "Paracétamol 1 g (2 hier, 1 aujourd'hui)."
      },
      {
        "q": "Demande",
        "a": "J'ai du Strepfen chez moi, puis-je le prendre ?"
      },
      {
        "q": "Médicaments ?",
        "a": "Aucun, sauf vitamines de grossesse et paracétamol."
      },
      {
        "q": "Questions",
        "a": "Pourquoi aller chez le médecin ? C'est quoi le CMV ?"
      },
      {
        "q": "Relance",
        "a": "Si pas demandé après QUIDAM : En fait je ne vous l'ai pas dit, mais je suis enceinte."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Pose la question de la grossesse ?",
              "Stade de la grossesse ? (T1)"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Douleur ?",
              "Fièvre ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ? (2 jours)"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ? (paracétamol pris)"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres traitements ? (Strepfen)"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Réfère au médecin (risque CMV)",
          "Prise en charge symptomatique à l'officine en attendant"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Hydratation",
              "Boissons chaudes",
              "Miel / citron / sucer des bonbons"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Paracétamol 1 g/prise, jusqu'à 3×/j (4-6 h entre les prises)",
              "Spray gorge : Medica spray (ou Néo-golaseptine) 3-5 pulv. 3×/j",
              "Ou comprimés : Medica (ou Golaseptine lidocaïne)"
            ]
          },
          {
            "label": "Femmes enceintes",
            "subs": [
              "Déconseillés chez la femme enceinte : Collutabs, Strepsils, Thymospray, Colludol",
              "Risque CMV : malformations (surdité, troubles neurologiques)",
              "Rappeler que tous les AINS sont contre-indiqués (Strepfen)"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "gorge-2",
    "plainte": "Mal de gorge",
    "variant": "Cas 2",
    "opening": "Bonjour, j'ai mal à la gorge depuis 2 jours. Je n'ai plus rien dans ma pharmacie. Femme de 45 ans.",
    "answers": [
      {
        "q": "Grossesse ?",
        "a": "Pas enceinte."
      },
      {
        "q": "Fièvre ?",
        "a": "Un peu de fièvre 38,5 °C depuis cet après-midi, non persistante."
      },
      {
        "q": "Éruption ?",
        "a": "Pas d'éruption cutanée."
      },
      {
        "q": "Toux ?",
        "a": "Pas de toux."
      },
      {
        "q": "Douleur ?",
        "a": "En avalant des deux côtés, je mange encore. Impression d'avaler des barbelés."
      },
      {
        "q": "Fatigue ?",
        "a": "Oui forcément, mais je ne me ménage pas."
      },
      {
        "q": "Depuis ?",
        "a": "Depuis 2 jours, c'est la première fois."
      },
      {
        "q": "Actions ?",
        "a": "Pastilles Medica menthe et une Sédergine de la voisine."
      },
      {
        "q": "Médicaments ?",
        "a": "Inuvair Nexthaler (asthme)."
      },
      {
        "q": "Controle asthme ?",
        "a": "Controlé, je respire toujours bien."
      },
      {
        "q": "Utilisation puff ?",
        "a": "Je rince bien la bouche après chaque utilisation."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Quoi ?",
            "subs": [
              "Douleur ?",
              "Fièvre ?",
              "Fatigue ?",
              "Éruption cutanée ?",
              "Toux ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres traitements ?",
              "Utilisation Inuvair : rince bien la bouche ?",
              "Asthme bien contrôlé ?"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Prise en charge symptomatique à l'officine"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Hydratation",
              "Boissons chaudes",
              "Miel / citron / sucer des bonbons"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Paracétamol 1 g/prise, jusqu'à 3×/j (4-6 h entre les prises)",
              "Sédergine non recommandée",
              "Spray gorge : Néo-golaseptine ou Medica spray 3-5 pulv. 3×/j",
              "Ou comprimés gorge : Collutabs, Strepsils, Thymospray, Colludol"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ongle-1",
    "plainte": "Mycose de l'ongle",
    "variant": "Cas 1",
    "opening": "Bonjour, j'ai une tache sur l'ongle, je voudrais qu'elle parte avant l'été. Je suis enceinte, mais j'aimerais connaître les possibilités de traitement pour en parler à mon gynécologue.",
    "answers": [
      {
        "q": "Quoi ?",
        "a": "Une tache qui fait moins d'1/3 de la surface du gros orteil."
      },
      {
        "q": "Étendue ?",
        "a": "Un autre orteil semble un peu touché."
      },
      {
        "q": "Localisation ?",
        "a": "Uniquement la partie distale (pas d'atteinte de la matrice)."
      },
      {
        "q": "Depuis ?",
        "a": "Je l'ai remarqué il y a quelques semaines."
      },
      {
        "q": "Actions ?",
        "a": "Du vernis pour cacher, mais ça ne suffit pas."
      },
      {
        "q": "Demande",
        "a": "Je voudrais connaître les possibilités de traitement et comment ça se déroule."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Enceinte ?",
              "Terme de la grossesse ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Pose la question du quoi ?",
              "Tache sur l'ongle ?",
              "Couleur de la tache ?",
              "Partie distale atteinte (ou matrice non atteinte) ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ? (quelques semaines)"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres traitements ?"
            ]
          }
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Ne pas partager les serviettes de bain",
              "Ne pas utiliser le même coupe-ongles",
              "Nettoyer et sécher entre les orteils",
              "Chaussettes en coton"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Ciclopirox : 1×/j, appliquer sur l'ongle (en débordant légèrement)",
              "Amorolfine : 1×/semaine, nettoyer et limer l'ongle",
              "Séchage : 30 s (ciclopirox) ou 3 min (amorolfine), attendre 6 h avant de nettoyer",
              "Effet : au moins 3 mois (repousse lente), traitement 9-12 mois (validité du flacon)",
              "La tache ne disparaîtra pas avec le produit",
              "Attendre la repousse de l'ongle pour la voir disparaître",
              "Si ciclopirox : pas de vernis ; amorolfine : possible après séchage"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ongle-2",
    "plainte": "Mycose de l'ongle",
    "variant": "Cas 2",
    "opening": "Bonjour, j'ai une tache un peu jaune sur mon gros orteil. Pouvez-vous me délivrer un produit pour la faire disparaître ?",
    "answers": [
      {
        "q": "Depuis ?",
        "a": "Apparue il y a quelques mois, je n'y ai pas prêté attention au départ mais elle a évolué."
      },
      {
        "q": "Objectif ?",
        "a": "Qu'elle soit partie avant l'été."
      },
      {
        "q": "Sport ?",
        "a": "Je fais beaucoup de course à pied (3×/semaine)."
      },
      {
        "q": "Antécédents ?",
        "a": "J'ai déjà utilisé le Daktarin spray pour des démangeaisons aux orteils."
      },
      {
        "q": "Actions ?",
        "a": "Rien, à part parfois du vernis pour cacher."
      },
      {
        "q": "Pathologies ?",
        "a": "Pas d'autres pathologies."
      },
      {
        "q": "Localisation ?",
        "a": "Partie distale, moins d'1/3 de la surface de l'ongle."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Quoi ?",
            "subs": [
              "Pose la question du quoi ?",
              "Tache sur l'ongle ?",
              "Couleur de la tache ?",
              "Partie distale atteinte (matrice non atteinte) ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ? (quelques semaines)"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres traitements ?"
            ]
          }
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Ne pas partager les serviettes de bain",
              "Ne pas utiliser le même coupe-ongles",
              "Nettoyer et sécher entre les orteils",
              "Chaussettes en coton"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Ciclopirox : 1×/j, appliquer sur l'ongle (en débordant légèrement)",
              "Amorolfine : 1×/semaine, nettoyer et limer l'ongle",
              "Séchage : 30 s (ciclopirox) ou 3 min (amorolfine), attendre 6 h avant de nettoyer",
              "Effet : au moins 3 mois (repousse lente), traitement 9-12 mois (validité du flacon)",
              "La tache ne disparaîtra pas avec le produit",
              "Attendre la repousse de l'ongle pour la voir disparaître",
              "Ciclopirox : pas de vernis ; amorolfine : possible après séchage"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mycose-vag-1",
    "plainte": "Mycose vaginale",
    "variant": "Cas 1",
    "opening": "Bonjour, j'ai des irritations et des démangeaisons au niveau de mes parties intimes, auriez-vous quelque chose pour me soulager ?",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Femme de 32 ans, pas enceinte."
      },
      {
        "q": "Saignements ?",
        "a": "Pas de saignements irréguliers."
      },
      {
        "q": "Pertes ?",
        "a": "Pertes blanches sans odeur, léger prurit."
      },
      {
        "q": "Autres ?",
        "a": "Pas de fièvre, pas de douleurs, pas de nausées/vomissements."
      },
      {
        "q": "Fréquence ?",
        "a": "2e fois cette année (la dernière en vacances avec le maillot)."
      },
      {
        "q": "Depuis ?",
        "a": "Depuis 2-3 jours."
      },
      {
        "q": "Actions ?",
        "a": "Pas d'action entreprise."
      },
      {
        "q": "Contraception ?",
        "a": "Un anneau."
      },
      {
        "q": "Préférence ?",
        "a": "Je préfère un ovule pour le traitement."
      },
      {
        "q": "Sécheresse ?",
        "a": "Pas de sécheresse vaginale."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Demande pour qui ?",
              "Enceinte ?",
              "Immunodéprimée / diabétique ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Odeur ?",
              "Pertes (blanches, grumeleuses) ?",
              "Prurit ?",
              "Fièvre ?",
              "Douleurs lombaires / bas-ventre ?",
              "Saignements anormaux ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ? (2-3 jours)",
              "Fréquence ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ? (rien)"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres médicaments ? (si contraceptif : anneau ?)"
            ]
          }
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Hygiène normale, pas excessive (eau tiède)",
              "Savon pH neutre",
              "Privilégier la douche (pas le bain)",
              "Bien sécher le périnée",
              "Sous-vêtements en coton",
              "Sous-vêtements pas trop serrés",
              "Changer quotidiennement de sous-vêtements"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Guérison spontanée possible sans traitement",
              "Canesten ovule, 1× le soir (prise unique)",
              "Rassurer : symptômes possibles 1-2 j après le traitement"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Si récidive > 4×/an : médecin",
              "Peut-être lié à l'anneau contraceptif",
              "Si persistance > 7 jours malgré traitement : médecin"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mycose-vag-2",
    "plainte": "Mycose vaginale",
    "variant": "Cas 2",
    "opening": "Bonjour, je viens chercher du Gyno-Daktarin. Mon partenaire peut-il l'utiliser également ?",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Femme de 43 ans."
      },
      {
        "q": "Pathologies ?",
        "a": "Diabète de type 2 depuis 2 ans."
      },
      {
        "q": "Pertes ?",
        "a": "Pertes blanches, sans odeur, avec sensation de brûlure et prurit."
      },
      {
        "q": "Autres ?",
        "a": "Pas de température, douleurs ou nausées."
      },
      {
        "q": "Depuis ?",
        "a": "Depuis 3 jours"
      },
      {
        "q": "Fréquence ?",
        "a": "2e fois en 6 mois."
      },
      {
        "q": "Actions ?",
        "a": "A essayé Saforelle Fraîcheur et Progyn, sans résultat."
      },
      {
        "q": "Médicaments ?",
        "a": "Metformine 500 (3×/j), Coversyl 5, Cerazette."
      },
      {
        "q": "Préférence ?",
        "a": "Je préfère une crème."
      },
      {
        "q": "Partenaire ?",
        "a": "Je voudrais un produit pour traiter aussi mon partenaire."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Demande pour qui ?",
              "Enceinte ?",
              "Immunodéprimée / diabétique ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Odeur ?",
              "Pertes (blanches, grumeleuses) ?",
              "Prurit ?",
              "Fièvre ?",
              "Douleurs lombaires / bas-ventre ?",
              "Saignements anormaux ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ? (2-3 jours)",
              "Fréquence ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres médicaments ?"
            ]
          }
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Hygiène normale, pas excessive - eau tiède OK",
              "Savon pH neutre",
              "Privilégier la douche (pas le bain)",
              "Bien sécher le périnée",
              "Sous-vêtements en coton",
              "Sous-vêtements pas trop serrés",
              "Changer quotidiennement de sous-vêtements"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Guérison spontanée possible sans traitement",
              "Canesten crème (Gyno-Daktarin RV), 1× le soir, 3 jours de suite",
              "Rassurer : symptômes possibles 1-2 j après le traitement",
              "Partenaire seulement si symptômes gênants : 2-3×/j, 1-2 semaines"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Si récidive > 4×/an : médecin",
              "Vérifier le contrôle glycémique : médecin",
              "Si persistance > 7 jours malgré traitement : médecin"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "sommeil-1",
    "plainte": "Troubles du sommeil",
    "variant": "Cas 1",
    "opening": "Je ne dors pas bien en ce moment, que pouvez-vous me proposer ?",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Femme de 35 ans"
      },
      {
        "q": "Grossesse ?",
        "a": "Pas enceinte."
      },
      {
        "q": "Café ?",
        "a": "5-6 cafés par jour."
      },
      {
        "q": "Actions ?",
        "a": "Pas d'action réellement entreprise."
      },
      {
        "q": "Médicaments ?",
        "a": "L-Thyroxine quotidiennement."
      },
      {
        "q": "Impact ?",
        "a": "Difficultés de concentration (impact modéré sur le quotidien)."
      },
      {
        "q": "MHD ?",
        "a": "On ne m'a jamais proposé de mesures hygiéno-diététiques."
      },
      {
        "q": "Alcool ?",
        "a": "1 ou 2 verres le week-end entre amis."
      },
      {
        "q": "Depuis ?",
        "a": "Depuis 10 jours."
      },
      {
        "q": "Fréquence ?",
        "a": "Au moins 2 nuits/semaine, selon le stress du travail pendant la journée."
      },
      {
        "q": "Sport ?",
        "a": "Pas de sport."
      },
      {
        "q": "Endormissement ?",
        "a": "Parfois difficile."
      },
      {
        "q": "Réveils ?",
        "a": "Souvent vers 2-3 h, je pense au travail."
      },
      {
        "q": "Pathologie ?",
        "a": "Pas de pathologie sous-jacente."
      },
      {
        "q": "Contexte ?",
        "a": "Beaucoup de travail (clôture fiscale, je suis comptable)."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Pose la question du qui ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Réveil nocturne ?",
              "Difficulté d'endormissement ?",
              "Réveil précoce ?",
              "Baisse de vigilance en journée ?",
              "Combien de nuits par semaine ?",
              "Sport / sédentarité ?",
              "Stress ?",
              "Hygiène du sommeil ?",
              "Pathologie sous-jacente ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres médicaments ?"
            ]
          }
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Régularité des heures de lever/coucher",
              "S'exposer à la lumière naturelle",
              "Obscurité de la chambre",
              "Aérer la chambre",
              "Café avant 16 h",
              "Repas léger le soir",
              "Activité physique mais pas tardive",
              "Pas d'écran le soir",
              "Se préparer au sommeil 30 min avant (activité calme)",
              "Si pas d'endormissement après 20 min, changer de pièce",
              "S'assurer de l'équilibre de la L-Thyroxine (prise de sang ?)"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Passiflore (Sedistress 200) : 1-2 co 30 min avant le coucher",
              "Valériane (Sedistress Sleep) : 1 co avant (+ 1 co dans la soirée)",
              "Nustasium à court terme : 1 co 30 min avant le coucher"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "sommeil-2",
    "plainte": "Troubles du sommeil",
    "variant": "Cas 2",
    "opening": "Je suis crevé, je n'arrive plus à récupérer. Je me réveille presque toutes les nuits. Vous avez quelque chose pour ça ?",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Homme de 42 ans, chef de projet informatique."
      },
      {
        "q": "Médicaments ?",
        "a": "Pas de traitement quotidien."
      },
      {
        "q": "Pathologie ?",
        "a": "Aucune connue."
      },
      {
        "q": "Café ?",
        "a": "2 tasses le matin, 1 l'après-midi."
      },
      {
        "q": "Alcool ?",
        "a": "1 bière 2-3 soirs/semaine."
      },
      {
        "q": "Actions ?",
        "a": "Tisanes (verveine, camomille), peu d'effet."
      },
      {
        "q": "Tabac ?",
        "a": "Pas de stupéfiants ni de tabac."
      },
      {
        "q": "Sport ?",
        "a": "Pas de sport régulier (manque de temps)."
      },
      {
        "q": "Depuis ?",
        "a": "Depuis environ 3 semaines."
      },
      {
        "q": "Fréquence ?",
        "a": "4-5 nuits/semaine."
      },
      {
        "q": "Impact ?",
        "a": "Fatigue matinale, irritabilité, baisse de motivation."
      },
      {
        "q": "Déclencheur ?",
        "a": "Charge mentale, deadlines, surcharge de mails."
      },
      {
        "q": "Endormissement ?",
        "a": "45 min à 1 h, je ressasse les tâches du travail."
      },
      {
        "q": "Réveils ?",
        "a": "2 à 4 réveils/nuit, 20-40 min pour me rendormir, réveil trop matinal."
      },
      {
        "q": "Sécurité ?",
        "a": "Pas de ronflements importants ni de pauses respiratoires."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Pose la question du qui ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Réveil nocturne ?",
              "Difficulté d'endormissement ?",
              "Réveil précoce ?",
              "Baisse de vigilance en journée ?",
              "Combien de nuits par semaine ?",
              "Sport / sédentarité ?",
              "Stress ?",
              "Hygiène du sommeil ?",
              "Pathologie sous-jacente ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres médicaments ?"
            ]
          }
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Régularité des heures de lever/coucher",
              "S'exposer à la lumière naturelle",
              "Obscurité de la chambre",
              "Aérer la chambre",
              "Café avant 16 h",
              "Repas léger le soir",
              "Activité physique mais pas tardive",
              "Pas d'écran le soir",
              "Se préparer au sommeil 30 min avant (activité calme)",
              "Si pas d'endormissement après 20 min, changer de pièce"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Passiflore (Sedistress 200) : 1-2 co 30 min avant le coucher",
              "Valériane (Sedistress Sleep) : 1 co avant (+ 1 co dans la soirée)",
              "Nustasium à court terme : 1 co 30 min avant le coucher",
              "Consultation recommandée si persistance"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cystite-1",
    "plainte": "Cystite",
    "variant": "Cas 1",
    "opening": "Jeune femme de 24 ans, samedi 12h58. Elle pense avoir une infection urinaire et veut quelque chose pour la soulager immédiatement.",
    "answers": [
      {
        "q": "Grossesse ?",
        "a": "Non."
      },
      {
        "q": "Symptômes ?",
        "a": "Ça démange un peu, juste une gêne à la miction."
      },
      {
        "q": "Alarme ?",
        "a": "Pas de fièvre, pas de douleur dans le bas du dos, pas de nausées."
      },
      {
        "q": "Depuis ?",
        "a": "Depuis la veille au soir, quasi jamais de cystite."
      },
      {
        "q": "Médicaments ?",
        "a": "Contraception orale."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Femme (bien pour vous) ?",
              "Sans aucun facteur de risque",
              "Enceinte ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Fièvre ?",
              "Sang dans les urines ?",
              "Douleur bas du dos / bas-ventre ?",
              "Nausées / vomissements ?",
              "Description des symptômes ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ? (< 2-3 jours)"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres médicaments ? (contraception orale)"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Aucun signe d'alerte : Ok prise en charge à l'officine"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Hydratation 1,5 L/j",
              "S'essuyer d'avant en arrière aux WC",
              "Savon doux pH neutre",
              "Hygiène normale, pas excessive",
              "Ne pas se retenir d'uriner",
              "Éviter les vêtements trop serrés (privilégier le coton)"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Guérison spontanée possible",
              "Douleur : paracétamol",
              "Traitement : busserole, 2 co 3×/j, max 7 jours",
              "Attention : colore les urines brun-vert"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Si pas d'amélioration en 2-3 j : médecin",
              "Si aggravation des symptômes : médecin"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cystite-2",
    "plainte": "Cystite",
    "variant": "Cas 2",
    "opening": "Femme de 54 ans, garde du dimanche 17h. Elle voudrait quelque chose pour apaiser un inconfort urinaire.",
    "answers": [
      {
        "q": "Symptômes ?",
        "a": "Besoin impérieux d'uriner et brûlure en fin de miction ; je pense tenir jusqu'à demain."
      },
      {
        "q": "Récurrence ?",
        "a": "J'ai souvent ça depuis quelque temps, j'ai l'habitude."
      },
      {
        "q": "Alarme ?",
        "a": "Pas de fièvre, pas de douleur dans le bas du dos, pas de nausées, pas de sang."
      },
      {
        "q": "Grossesse ?",
        "a": "Non."
      },
      {
        "q": "Diabète ?",
        "a": "Oui (déduit des médicaments pris)."
      },
      {
        "q": "Depuis ?",
        "a": "Depuis ce matin."
      },
      {
        "q": "Actions ?",
        "a": "Beaucoup d'eau et du jus de cranberry, sans amélioration."
      },
      {
        "q": "Médicaments ?",
        "a": "12 derniers mois : Jardiance 25, Metformine 850, Bisoprolol 5, Atorvastatine 20, Mirena, Oestrogel, Monuril (3 boites), Uricran Comfort, D-mannose."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Femme (bien pour vous) : évident mais à confirmer",
              "Facteur de risque : diabète (DPP / médicaments)"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Description des symptômes ?",
              "Sang dans les urines ?",
              "Fièvre / frissons ?",
              "Douleur bas du dos / bas-ventre ?",
              "Nausées / vomissements ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ? (< 2-3 jours)"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ? (jus de cranberry)"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres médicaments ? (eID / Jardiance…)"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Signe d'alerte : diabète (prudence)",
          "Patiente peut tenir jusqu'à demain → OK officine avec conseils"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Hydratation 1,5 L/j",
              "S'essuyer d'avant en arrière aux WC",
              "Savon doux pH neutre",
              "Hygiène normale, pas excessive",
              "Ne pas se retenir d'uriner",
              "Éviter les vêtements trop serrés (privilégier le coton)"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Guérison spontanée possible en 48 h chez 25% des femmes",
              "Conseiller de parler du Jardiance (cause possible) au médecin",
              "Douleur (immédiat) : paracétamol",
              "Traitement possible : busserole, 2 co 3×/j, max 7 jours",
              "Attention : colore les urines brun-vert"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Si pas d'amélioration en 2-3 j : médecin",
              "Si aggravation des symptômes : médecin"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "toux-1",
    "plainte": "Toux",
    "variant": "Cas 1",
    "opening": "Bonjour, je souhaite un sirop pour la toux de mon enfant de 18 mois. Le Muco Rhinathiol enfant convient-il ? J'en ai encore à la maison.",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Enfant de 18 mois, très bon état général, enrhumé, beaucoup de glaires mais claires."
      },
      {
        "q": "Depuis ?",
        "a": "Depuis 3 jours."
      },
      {
        "q": "Nez ?",
        "a": "Le nez coule beaucoup, plusieurs rinçages au sérum physiologique par jour."
      },
      {
        "q": "Respiration ?",
        "a": "Dort normalement, pas de respiration sifflante, ne tousse pas plus la nuit."
      },
      {
        "q": "Toux ?",
        "a": "Pas de toux qui fait vomir, pas de toux en quinte."
      },
      {
        "q": "Fièvre ?",
        "a": "Un peu fiévreux (37-37,5 °C), ça baisse avec le paracétamol."
      },
      {
        "q": "Antécédents ?",
        "a": "Plusieurs bronchiolites étant petit, mais plus depuis longtemps."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Demande qui est le patient (enfant de 18 mois)"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Fièvre ?",
              "Rhume ?",
              "Respiration sifflante ?",
              "Toux qui fait vomir ?",
              "Toux en quinte ?",
              "Toux nocturne ?",
              "Expectorations claires ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ? (3 jours)"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ? (Muco Rhinathiol à la maison)"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres médicaments ?"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Muco Rhinathiol non recommandé (CI < 2 ans)",
          "Aucun sirop statut médicament indiqué < 2 ans"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Hydratation",
              "Aérer",
              "Éviter les irritants (poussière, tabac)",
              "Humidifier l'air",
              "Nettoyer le nez au sérum physiologique",
              "Miel OK (> 1 an)"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Paracétamol si fièvre"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Médecin si aggravation des symptômes",
              "Médecin si pas d'amélioration en 7 jours",
              "Médecin si fièvre pendant 3 jours"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "toux-2",
    "plainte": "Toux",
    "variant": "Cas 2",
    "opening": "Bonjour, je voudrais un sirop pour ma toux.",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Homme de 65 ans."
      },
      {
        "q": "Pathologies ?",
        "a": "Diabète et hypertension."
      },
      {
        "q": "Médicaments ?",
        "a": "Metformine 500 (3×/j, 1 an), Bipressil 5/5 (3 ans)."
      },
      {
        "q": "Symptômes ?",
        "a": "Toux grasse (peu colorée) depuis 5 jours, avec nez qui coule."
      },
      {
        "q": "Fièvre ?",
        "a": "Pas de fièvre."
      },
      {
        "q": "Nuit ?",
        "a": "Je me réveille la nuit à cause de la toux."
      },
      {
        "q": "Actions ?",
        "a": "Un sirop restant à la maison, je crois que ça s'appelle Broncho…, il est vert."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Demande qui est le patient (homme, 65 ans)",
              "Diabète + hypertension"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Fièvre ?",
              "Rhume ?",
              "Respiration sifflante ?",
              "Toux qui fait vomir ?",
              "Toux en quinte ?",
              "Toux nocturne ?",
              "Expectorations claires ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ? (5 jours)"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises ? (sirop dextrométhorphane)"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres médicaments ? (metformine + bisoprolol/périndopril)"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Dextrométhorphane non recommandé pour une toux grasse (éventuellement la nuit)",
          "OK sirop toux grasse à base de guaïfénésine (ou acétylcystéine)",
          "Éviter de donner tard le soir (pour ne pas tousser la nuit)",
          "Éviter le sucre dans le sirop"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Hydratation",
              "Aérer",
              "Éviter les irritants (poussière, tabac)",
              "Humidifier l'air",
              "Nettoyer le nez au sérum physiologique",
              "Tisane au thym",
              "Miel (attention : diabète !)"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Paracétamol si fièvre"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Médecin si fièvre > 38 °C pendant 3 jours",
              "Médecin si pas d'amélioration en 7 jours",
              "Une toux peut durer jusqu'à 3 semaines",
              "Médecin si aggravation de la toux"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "contraception-urgence",
    "plainte": "Contraception d'urgence",
    "variant": "Cas 1",
    "opening": "Bonjour, j'aurais besoin d'une contraception d'urgence.",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Patiente 24 ans."
      },
      {
        "q": "Poids ?",
        "a": "68 kg."
      },
      {
        "q": "Contraception ?",
        "a": "Noranelle 20."
      },
      {
        "q": "Prise ?",
        "a": "Semaine 1, aucun oubli."
      },
      {
        "q": "Quoi ?",
        "a": "Oubli de 2 pilules (10ème et 11ème)."
      },
      {
        "q": "RNSP ?",
        "a": "Oui, il y a 48h."
      },
      {
        "q": "Autre RNSP ?",
        "a": "Non."
      },
      {
        "q": "Médicaments ?",
        "a": "Non."
      },
      {
        "q": "Compléments ?",
        "a": "Non."
      },
      {
        "q": "Autre CU ?",
        "a": "Non."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Pour qui ?",
              "Contraception continue ? Si oui, laquelle ?",
              "Poids > 70 kg ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Échec de la contraception continue ?",
              "semaine de plaquette (patch / anneau) précédente ?",
              "RSNP ? Si oui, quand ?",
              "Autre RSNP depuis les dernières règles ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Médicaments pris régulièrement ?",
              "Tisanes / compléments alimentaires ?",
              "Autre CU (UPA – LNG) dans les 7 jours précédents ?"
            ]
          }
        ]
      },
      {
        "title": "Informations",
        "items": [
          {
            "label": "Alternatives et choix pour la patiente",
            "subs": [
              "Pas de CU nécessaire car semaine 2",
              "Si demande +++ : LNG 1,5 mg"
            ]
          },
          {
            "label": "BUM CU",
            "subs": [
              "Efficacité : pas 100 %",
              "Effets indésirables (troubles digestifs, retard de règles)",
              "Modalités de prise : nombre de comprimés ; que faire si vomissements (3h) ou diarrhées (24h)",
              "Prendre avec un verre d'eau"
            ]
          },
          {
            "label": "Sécurisation du cycle",
            "subs": [
              "la CU n'est pas un moyen contraceptif",
              "Dernière pilule oubliée + pilule du jour",
              "MCS 7 jours"
            ]
          },
          "Test de grossesse dans les 2,5 semaines (si symptômes ou pas de règles)",
          "Fiche CU distribuée / commentée",
          "Fiche IST"
        ]
      },
      {
        "title": "Attitude & Communication",
        "items": [
          "Valorisation de la démarche",
          "Justification du questionnement (ex : poids)",
          "Consignes précises",
          "Langage « patient » — pas de jargon",
          "Clôture : résumé — besoin d'autres informations ?",
          "Encodage médecin fictif pour remboursement"
        ]
      }
    ]
  },
  {
    "id": "nausees-grossesse",
    "plainte": "Nausées et vomissements",
    "variant": "Cas 1",
    "opening": "Bonjour ! Je ne me sens pas très bien, j'ai des nausées surtout le matin. Ma voisine prend du Navalit®, il paraît que ça marche bien. J'ai aussi du Motilium® à la maison, je peux l'utiliser ? (T1)",
    "answers": [
      {
        "q": "Qui ?",
        "a": "C'est pour moi, je suis enceinte de 9 semaines (1er trimestre)."
      },
      {
        "q": "Depuis ?",
        "a": "Récemment, ça a commencé avec la grossesse."
      },
      {
        "q": "Médicaments ?",
        "a": "Buscopan®, Ozempic®, Trajenta®, Januvia®."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Demande qui est la patiente / confirme la grossesse ?",
              "Précise le terme ? (T1)"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Quel est selon vous la cause des nausées ?",
              "Quels sont les autres symptômes ?",
              "Diarrhées ?",
              "Perte de poids ?",
              "Fièvre ?",
              "Céphalées (T2 = prééclampsie) ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Demande les actions déjà entreprises ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Demande les autres médicaments pris ?",
              "Demande si prise de vitamines de grossesse (cause de novo, ex: fer) ?"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          {
            "label": "Motilium® (dompéridone)",
            "subs": [
              "Déconseillé (courte période) pendant la grossesse donc ne délivre pas"
            ]
          },
          {
            "label": "Navalit® (doxylamine + pyridoxine)",
            "subs": [
              "Traitement de 1ère intention pour novo",
              "Sous prescription médicale",
              "Oriente vers le médecin pour l'initiation du Navalit®"
            ]
          }
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Manger en petites quantités mais fréquemment",
              "Éviter les aliments gras, épicés et les odeurs fortes",
              "Collation au réveil",
              "Hydratation fractionnée (petites gorgées)",
              "Repos, éviter le jeûne prolongé",
              "Gingembre possible (bonne tolérance)",
              "Prendre vitamines au cours d'un repas (améliore la tolérance)",
              "Prendre que acide folique seul si nausées trop importantes (avec avis médical)"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Méclozine : possible en vente libre, en 2e intention",
              "Doxylamine (isolée) : sous prescription, efficace mais somnolence possible",
              "Métoclopramide (courte durée)",
              "Ondansétron : seulement en dernier recours"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "vaccination-grossesse",
    "plainte": "Vaccination",
    "variant": "Cas 1",
    "opening": "Bonjour, je viens de faire un test de grossesse qui est positif. Dois-je prévoir des vaccins ? J'avoue ne pas être très rassurée à l'idée d'en faire. (T1)",
    "answers": [
      {
        "q": "Médicaments ?",
        "a": "Aucun."
      },
      {
        "q": "Vaccins ?",
        "a": "Aucun."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Confirme la grossesse et le terme (T1) ?",
              "Vaccins ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Autres symptômes et depuis quand ?"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Vaccins inactivés (grippe, Covid-19, coqueluche) : compatibles pendant la grossesse",
          "Vaccins vivants atténués (ROR, varicelle, fièvre jaune) : contre-indiqués pendant la grossesse",
          "Reporte les vaccins vivants en post-partum"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Expliquer l'intérêt de la vaccination (pour la mère et l'enfant)",
              "Encourager la vaccination de l'entourage"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "(Boostrix®) : recommandé, idéalement entre 20 et 36 SA (protège le nouveau-né de la coqueluche)",
              "Grippe (vaccin inactivé) : recommandé quel que soit le trimestre",
              "Covid-19 (ARNm) : recommandé surtout en cas de comorbidité / facteurs de risque",
              "RSV : au T3 selon les recommandations, ou Beyfortus® (nirsévimab) chez le nouveau-né",
              "Avant grossesse : RRO, varicelle + anticorps toxo. + CMV",
              "Compatibilité allaitement : vaccins inactivés ET vivants atténués compatibles"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Surveillance : fièvre > 38,5 °C persistante, réaction allergique → consulter",
              "Tracer toutes les vaccinations dans le dossier de maternité"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cystite-grossesse",
    "plainte": "Cystite",
    "variant": "Cas 3",
    "opening": "Bonjour ! Je reviens de chez le gynéco, ma tigette est positive. Elle m'a prescrit un antibiotique et du cranberry pour après. Je n'aime pas trop les antibiotiques et je n'ai aucun symptôme. Pouvez-vous juste me donner du cranberry ? (T1)",
    "answers": [
      {
        "q": "Depuis ?",
        "a": "Les résultats datent de quelques jours."
      },
      {
        "q": "Actions ?",
        "a": "Aucune, je n'ai pas encore commencé l'antibiotique."
      },
      {
        "q": "Médicaments ?",
        "a": "Aucun traitement en cours."
      },
      {
        "q": "Symptômes",
        "a": "Aucun."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Confirme la grossesse et le terme ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Facteurs de risques (immunodéprimée, diabétique, sonde, IR ...) ?",
              "Fièvre ?",
              "Douleur bas du dos ou ventre ?",
              "Nausées/vomissements ?",
              "Sang dans les urines ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Depuis quand ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Actions entreprises (antibiotique pris) ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Autres médicaments ?"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Délivre l'antibiotique prescrit"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Boire 1,5 à 2 L par jour",
              "Uriner fréquemment, surtout après les rapports",
              "Sous-vêtements en coton, pas trop serrés",
              "Hygiène intime douce, essuyage d'avant en arrière",
              "Ne pas se retenir d'uriner"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Le traitement antibiotique est nécessaire même sans symptôme",
              "Insiste sur le risque de pyélonéphrite / accouchement prématuré si non traité",
              "Conseils de prise Monuril® (fosfomycine) : à jeun, vessie vide, grand verre d'eau, ne pas boire 3 à 6 h après, 1 prise",
              "Nitrofurantoïne (1er choix) : en fin de repas, coloration brunâtre des urines possible, 5 jours",
              "Cranberry : utile en prévention des récidives (≥ 36 mg de PAC/jour), pas en traitement de l'infection"
            ]
          },
          {
            "label": "Allaitement",
            "subs": [
              "Aucune contre-indication"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "ECBU de contrôle 8–10 jours après le traitement",
              "Contrôle des urines à chaque trimestre",
              "Surveillance : fièvre, brûlures, douleurs lombaires, contractions → consulter médecin sans délai",
              "Si pas d'amélioration dans 2-3 jours renvoyé vers le médecin"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cephalee-grossesse",
    "plainte": "Céphalées",
    "variant": "Cas 1",
    "opening": "Bonjour ! J'ai mal à la tête depuis ce matin. Je n'ai pas souvent mal à la tête mais je voudrais quelque chose d'efficace. Je prends du Dafalgan® 500 mg une fois par jour mais ça ne marche pas très bien chez moi ! (T3)",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Femme enceinte du troisième trimestre."
      },
      {
        "q": "Intensité ?",
        "a": "C'est gênant mais supportable."
      },
      {
        "q": "Signes d'alerte ?",
        "a": "Pas de troubles de la vision, pas de gonflement, pas de douleur au ventre."
      },
      {
        "q": "Tension ?",
        "a": "Je ne connais pas ma tension, je n'ai pas de tensiomètre."
      },
      {
        "q": "Fréquence ?",
        "a": "Quelques fois."
      },
      {
        "q": "Médicaments ?",
        "a": "Dafalgan® 500 mg en chronique, nifédipine et amlodipine"
      },
      {
        "q": "Facteurs de risques ?",
        "a": "Enceinte."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Confirme la grossesse et le terme (T3) ?",
              "Facteurs de risques (HTA, >50 ans, enceinte, cancer, immunodéprimé ...)"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Depuis quand ?",
              "Intensité ?",
              "Première fois ?",
              "Troubles visuels / bourdonnements ?",
              "Œdèmes / douleurs abdominales ?",
              "Tension élevée ? (risque prééclampsie)",
              "Autres symptômes ?"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Depuis quand ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Demande les actions entreprises  ? (dose et durée du paracétamol -> mésusage?)"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Demande les traitements en cours (IEC, antihypertenseurs) ?"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Augmenter posologie du paracétamol à 1g toutes les 6h (max 3g/j)",
          "Si inefficace → avis médical (pas d'automédication) et pas d'antidouleurs en chronique sans avis médical"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Mesures non pharmacologiques",
            "subs": [
              "Bonne hydratation (1,5 à 2 L/jour)",
              "Repos au calme, sommeil suffisant",
              "Froid sur le front / les tempes",
              "Massages doux de la nuque et des épaules",
              "Limiter la caféine (max 200 mg/jour)",
              "Eviter de sauter un repas",
              "Eviter l'alcool",
              "Eviter les écrans",
              "Eviter les causes de stress et activités de relaxation"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "1er choix = paracétamol",
              "AINS (2ème choix) : ici contre-indiqué car enceinte (T3)"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Proposer un agenda des céphalées avant d'aller chez le médecin",
              "Signes d'alerte → urgence : céphalée intense ou persistante, troubles visuels, œdèmes, douleurs abdominales (prééclampsie)",
              "Si > 4 jours ou migraine 2x/mois ou céphalées de tension > 15 jours => médecin"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "toux-grossesse",
    "plainte": "Toux",
    "variant": "Cas 3",
    "opening": "Bonjour ! Je tousse depuis quelques jours, une toux sèche qui m'irrite la gorge. Je n'ai pas d'autres symptômes et je n'ai rien pris. Pouvez-vous me donner quelque chose ? (T3)",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Femme enceinte du troisième trimestre."
      },
      {
        "q": "Allergie / tabac ?",
        "a": "Pas d'allergie, je ne fume pas."
      },
      {
        "q": "Vaccins ?",
        "a": "Je ne suis pas sûre d'être à jour."
      },
      {
        "q": "Actions ?",
        "a": "Rien pour le moment."
      },
      {
        "q": "Médicaments ?",
        "a": "IECA."
      },
      {
        "q": "Co-morbidités ?",
        "a": "Aucune."
      },
      {
        "q": "Reflux ?",
        "a": "Non."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Confirme la grossesse et le terme (T3) ?",
              "Allergie ?",
              "Fumeuse ?",
              "Co-morbidités (IC, asthme/bpco, diabète, alcool) ?",
              "Vaccins à jours (coqueluche) ?",
              "Reflux ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Demande l'aspect de la toux (sèche / grasse) ?",
              "Autres symptômes (rhume, fièvre, expectorations colorées, vomissements ...) ?",
              "Coqueluche (toux sifflante, vomissements, toux quinteuse)"
            ]
          },
          {
            "label": "Depuis ?",
            "subs": [
              "Demande depuis quand ?"
            ]
          },
          {
            "label": "Actions ?",
            "subs": [
              "Demande les actions entreprises ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Demande les médicaments en cours ? (IECA)"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Toux sèche : miel / sirop adoucissant en 1ère intention",
          "Dextrométhorphane possible ponctuellement (T2–T3, courte durée, dose minimale)",
          "Si IECA en cours → arrêt et avis médical (tératogène)"
        ]
      },
      {
        "title": "Conseils",
        "items": [
          {
            "label": "Conseils non pharmacologiques",
            "subs": [
              "Boire beaucoup 1,5L/j",
              "Boissons tièdes au miel/thym",
              "Aérer",
              "Humidifier l'air ambiant",
              "Éviter les irritants (fumée, parfums, air sec)",
              "Surélever la tête pendant le sommeil",
              "Nettoyer le nez avec sérum physiologique",
              "Pastilles/bonbons à sucer",
              "Aérosol avec du sérum physiologique",
              "Si reflux, fractionner les repas"
            ]
          },
          {
            "label": "Conseils pharmacologiques",
            "subs": [
              "Codéine contre-indiquée au T3 (dépression respiratoire néonatale)",
              "Éviter les associations AINS / pseudoéphédrine / huiles essentielles / alcool",
              "Paracétamol si douleurs"
            ]
          },
          {
            "label": "Suivi",
            "subs": [
              "Si > 3 semaines -> médecin",
              "Si 3 jours avec fièvre > 38°C -> médecin"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "bum-asthme-sophie",
    "plainte": "BUM Asthme",
    "variant": "Cas 1",
    "opening": "Bonjour je suis Sophie, j'ai 23 ans et je viens chercher mon nouveau traitement pour l'asthme, le Symbicort. Le médecin me l'a prescrit il y a quelques jours mais je n'ai pas bien compris comment l'utiliser, et je n'ai pas eu d'inhalateur depuis des années.\n\nPrescription : Symbicort Turbohaler 160/4,5, 2 inhalations 2×/jour, et « en plus si besoin ».\n\nJe pars en randonnée en montagne dans 4 semaines, j'ai un effort physique intense prévu. J'ai peur que l'asthme m'empêche de faire du sport et de profiter de la montagne.",
    "answers": [
      {
        "q": "Symptômes ?",
        "a": "Depuis quelques jours j'étais très essoufflée, c'est pour ça que j'ai consulté."
      },
      {
        "q": "Allergies ?",
        "a": "Je suis allergique aux pollens : je prends de l'Allergodil en spray nasal et de la cétirizine."
      },
      {
        "q": "Traitement de crise ?",
        "a": "Non, on ne m'a rien donné d'autre, pas de Ventolin pour les crises."
      },
      {
        "q": "Facteurs déclenchants ?",
        "a": "Les pollens surtout ; je ne sais pas pour l'effort ou le froid."
      },
      {
        "q": "Médicaments ?",
        "a": "Cétirizine, Allergodil, et maintenant le Symbicort."
      }
    ],
    "sections": [
      {
        "title": "Structure de l'entretien / introduction",
        "items": [
          {
            "label": "Conditions pour entretien BUM",
            "subs": [
              "Etre atteint d'asthme chronique",
              "Avoir un traitement de fond par corticostéroïde inhalé (CSI) pour la première fois depuis 1 an",
              "Ou asthme chronique non controlé et qui prend un CSI : Ne pas avoir eu de BUM depuis 1 an"
            ]
          },
          {
            "label": "Maladie - Evaluation des connaissances du patient",
            "subs": [
              "Maladie chronique",
              "Inflammation des bronches",
              "Asymptomatique en dehors des crises",
              "3 causes de rétrécissement des bronches (inflammation, bronchoconstriction, hypersécrétion)",
              "Symptômes réversibles",
              "Facteurs déclenchants (pollens, effort, air froid…)",
              "Expliquer les symptômes d'alarme (dyspnée au repos, essoufflement, réveils nocturnes, txt crise > 2x/semaine, maux de tête, augmentation de la pression artérielle  )",
              "Évalue le contrôle de l'asthme (test ACT)",
              "Utilisation d'ilustrations"
            ]
          }
        ]
      },
      {
        "title": "Traitement",
        "items": [
          "Objectifs / actions du traitement (fond vs crise)",
          "Délai d'action / durée d'action",
          "Posologies – durée du traitement",
          "Effets indésirables (candidose, dysphonie, mal de gorge, maux de tête, augmentation de la pression artérielle ...)",
          "Importance de la compliance",
          "Craintes du patient (sport, montagne)"
        ]
      },
      {
        "title": "Technique d'inhalation (Turbohaler)",
        "items": [
          "Action à la 1ère manipulation (ou si pas d'usage depuis 15 j)",
          "Faut-il secouer ? (non — DPI)",
          "Comment charger la dose (tenir vertical, tourner jusqu'au clic)",
          "Comment administrer la dose (expirer loin de l'embout, inspirer fort et profond)",
          "Technique de respiration (4 phases) + retenir le souffle 10 s",
          "Évaluation : la dose est-elle bien passée ?",
          "Quid si une double dose a été chargée ?",
          "Compteur de doses à l'unité",
          "Évaluation des doses restantes",
          "Entretien du dispositif",
          "Rinçage de la bouche obligatoire après chaque prise (corticoïde)"
        ]
      },
      {
        "title": "Mesures associées",
        "items": [
          "Conseils randonnée : inhalateur accessible, couvrir nez/bouche au froid",
          "Poursuivre la cétirizine en saison pollinique",
          "Reconnaître les signes d'alarme → urgences"
        ]
      },
      {
        "title": "Clôture",
        "items": [
          "Proposer un suivi BUM à 1 mois",
          "Questions du patient / clôture"
        ]
      }
    ]
  },
  {
    "id": "bum-bpco-madeleine",
    "plainte": "BUM BPCO",
    "variant": "Cas 1",
    "opening": "Bonjour je suis Madeleine Dubois, 72 ans. Je suis suivie pour des problèmes de respiration qui se sont aggravés récemment. Le médecin m'a changé mon traitement pour la respiration, j'ai maintenant l'Anoro 1 puff/j. Mais je ne comprends pas bien à quoi ça sert, et on ne m'a pas expliqué comment l'utiliser.\n\nHistorique des 12 derniers mois :\n\n- Coversyl 90 *5 : 3 btes\n- D cure 12 gel : 1 bte\n- Duovent AD : 5 btes\n- Muco rhinathiol adulte : 2 flacons \n- Sertraline 60 * 100 : 6 btes\n- Supradyn energie : 2 btes\n- Vaxigrip \n- Lormetazepam 30* 2  : 12 btes",
    "answers": [],
    "sections": [
      {
        "title": "Structure de l'entretien / introduction",
        "items": [
          {
            "label": "Conditions BUM BPCO",
            "subs": [
              "> 50 ans (sauf avis médecin)",
              "Min 1 délivrance/12 derniers mois d'un \"longue durée d'action\" indiqué dans BPCO"
            ]
          },
          {
            "label": "Maladie",
            "subs": [
              "Qu'est-ce que la BPCO ?",
              "Symptômes du patient ?",
              "Exacerbations / symptômes d'alarme",
              "Préoccupations du patient – impact sur la qualité de vie",
              "Utilisation d'ilustrations"
            ]
          }
        ]
      },
      {
        "title": "Traitement",
        "items": [
          "Objectifs / actions + importance de la compliance",
          "Traitement des symptômes vs traitement de fond (Anoro = fond, 1×/j)",
          "Délai d'action / durée d'action",
          "Posologies – moment de prise / durée du traitement",
          "Effets indésirables les plus fréquents",
          "Effets indésirables : que faire si sécheresse buccale",
          "Craintes du patient"
        ]
      },
      {
        "title": "Technique d'inhalation (Ellipta)",
        "items": [
          "Faut-il secouer ? (non)",
          "Comment charger la dose (ouvrir le couvercle jusqu'au clic)",
          "Comment administrer la dose (expirer loin, inspirer lent et profond)",
          "Technique de respiration (4 phases) + retenir le souffle 3-4 s",
          "Évaluation : la dose est-elle bien passée ?",
          "Quid si une double dose a été chargée ?",
          "Évaluation des doses restantes (compteur)",
          "Entretien du dispositif",
          "Se rincer la bouche si nécessaire",
          "Vérifier la capacité d'ouverture du capuchon (arthrose)"
        ]
      },
      {
        "title": "Autres mesures",
        "items": [
          "Vaccination : covid – grippe – pneumocoque",
          "Statut tabagique – tentative d'arrêt",
          "Alimentation (dénutrition fréquente)",
          "Activité physique / réhabilitation respiratoire",
          "Négociation des interventions"
        ]
      },
      {
        "title": "Clôture",
        "items": [
          "Questions du patient / clôture"
        ]
      }
    ]
  },
  {
    "id": "custom-1780828850982",
    "plainte": "Contraception d'urgence",
    "variant": "Cas 2",
    "opening": "Bonjour, j'aurais besoin d'une contraception d'urgence.",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Patiente 43 ans."
      },
      {
        "q": "Poids ?",
        "a": "76 kg."
      },
      {
        "q": "Contraception ?",
        "a": "Non."
      },
      {
        "q": "Quoi ?",
        "a": "Rupture de préservatif."
      },
      {
        "q": "RNSP ?",
        "a": "Oui la veille au soir (<24h)."
      },
      {
        "q": "Autre RNSP ?",
        "a": "Non."
      },
      {
        "q": "Médicaments ?",
        "a": "Coversyl+ (hypertendue)."
      },
      {
        "q": "Compléments ?",
        "a": "Non."
      },
      {
        "q": "Autre CU ?",
        "a": "Non."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Pour qui ?",
              "Contraception continue ? Si oui, laquelle ?",
              "Poids > 70 kg ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Échec de la contraception continue ?",
              "semaine de plaquette (patch / anneau) précédente ?",
              "RSNP ? Si oui, quand ?",
              "Autre RSNP depuis les dernières règles ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Médicaments pris régulièrement ?",
              "Tisanes / compléments alimentaires ?",
              "Autre CU (UPA – LNG) dans les 7 jours précédents ?"
            ]
          }
        ]
      },
      {
        "title": "Informations",
        "items": [
          {
            "label": "Alternatives et choix pour la patiente",
            "subs": [
              "Cu nécessaire dans tous les cas car pas de contraception continue",
              "<72h donc Ellaone OK (mieux avec poids) ou LNG 3 mg"
            ]
          },
          {
            "label": "BUM CU",
            "subs": [
              "Efficacité : pas 100 %",
              "Effets indésirables (troubles digestifs, retard de règles)",
              "Modalités de prise : nombre de comprimés ; que faire si vomissements (3h) ou diarrhées (24h)",
              "Prendre avec un verre d'eau"
            ]
          },
          {
            "label": "Sécurisation du cycle",
            "subs": [
              "la CU n'est pas un moyen contraceptif",
              "Envisager contraception continue (LNG : pas de délai pour initiation ; UPA : attendre 5j). Eviter estrogènes car HTA."
            ]
          },
          "Test de grossesse dans les 2,5 semaines (si symptômes ou pas de règles)",
          "Fiche CU distribuée / commentée",
          "Fiche IST"
        ]
      },
      {
        "title": "Attitude & Communication",
        "items": [
          "Valorisation de la démarche",
          "Justification du questionnement (ex : poids)",
          "Consignes précises",
          "Langage « patient » — pas de jargon",
          "Clôture : résumé — besoin d'autres informations ?",
          "Encodage médecin fictif pour remboursement"
        ]
      }
    ]
  },
  {
    "id": "custom-1780828908694",
    "plainte": "Contraception d'urgence",
    "variant": "Cas 3",
    "opening": "Bonjour, j'aurais besoin d'une contraception d'urgence.",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Patiente 40 ans."
      },
      {
        "q": "Poids ?",
        "a": "64 kg."
      },
      {
        "q": "Contraception ?",
        "a": "Evra patch."
      },
      {
        "q": "Prise ?",
        "a": "On est en semaine 1 - jour 2."
      },
      {
        "q": "Quoi ?",
        "a": "Patch en partie décollé ce matin (donc depuis >24h)."
      },
      {
        "q": "RNSP ?",
        "a": "Oui, la veille."
      },
      {
        "q": "Autre RNSP ?",
        "a": "Non."
      },
      {
        "q": "Médicaments ?",
        "a": "Passiflore, metarelax."
      },
      {
        "q": "Compléments ?",
        "a": "Non."
      },
      {
        "q": "Autre CU ?",
        "a": "Non."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Pour qui ?",
              "Contraception continue ? Si oui, laquelle ?",
              "Poids > 70 kg ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Échec de la contraception continue ?",
              "Semaine de plaquette (patch / anneau) précédente ?",
              "RSNP ? Si oui, quand ? (depuis quand le patch est décollé)",
              "Autre RSNP depuis les dernières règles ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Médicaments pris régulièrement ?",
              "Tisanes / compléments alimentaires ?",
              "Autre CU (UPA – LNG) dans les 7 jours précédents ?"
            ]
          }
        ]
      },
      {
        "title": "Informations",
        "items": [
          {
            "label": "Alternatives et choix pour la patiente",
            "subs": [
              "CU nécessaire car semaine 1 -> 24h donc considéré comme 2 oublis",
              "LNG 1,5 mg OK car <72h et poids <70kg"
            ]
          },
          {
            "label": "BUM CU",
            "subs": [
              "Efficacité : pas 100 %",
              "Effets indésirables (troubles digestifs, retard de règles)",
              "Modalités de prise : nombre de comprimés ; que faire si vomissements (3h) ou diarrhées (24h)",
              "Prendre avec un verre d'eau"
            ]
          },
          {
            "label": "Sécurisation du cycle",
            "subs": [
              "la CU n'est pas un moyen contraceptif",
              "Recoller un nouveau patch à garder max 7j (décaler le cycle ou ne le laisser en place que 5 jours avant le suivant)"
            ]
          },
          "Test de grossesse dans les 2,5 semaines (si symptômes ou pas de règles)",
          "Fiche CU distribuée / commentée",
          "Fiche IST"
        ]
      },
      {
        "title": "Attitude & Communication",
        "items": [
          "Valorisation de la démarche",
          "Justification du questionnement (ex : poids)",
          "Consignes précises",
          "Langage « patient » — pas de jargon",
          "Clôture : résumé — besoin d'autres informations ?",
          "Encodage médecin fictif pour remboursement"
        ]
      }
    ]
  },
  {
    "id": "custom-1780829167662",
    "plainte": "Contraception d'urgence",
    "variant": "Cas 4",
    "opening": "Bonjour, j'aurais besoin d'une contraception d'urgence.",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Patiente 22 ans."
      },
      {
        "q": "Poids ?",
        "a": "64 kg."
      },
      {
        "q": "Contraception ?",
        "a": "Desorelle 20."
      },
      {
        "q": "Prise ?",
        "a": "On est en semaine 1."
      },
      {
        "q": "Quoi ?",
        "a": "Devait reprendre sa pilule le vendredi soir - Partie en we (vendredi à dimanche) et l'a oubliée."
      },
      {
        "q": "RNSP ?",
        "a": "Vendredi et dimanche (Nous sommes lundi après midi)."
      },
      {
        "q": "Autre RNSP ?",
        "a": "Non"
      },
      {
        "q": "Médicaments ?",
        "a": "Ellaone, Levodonna."
      },
      {
        "q": "Compléments ?",
        "a": "Non."
      },
      {
        "q": "Autre CU ?",
        "a": "Oui, Ellaone mois passé et LNG il y a plus de 7 jours => oublis fréquents"
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Pour qui ?",
              "Contraception continue ? Si oui, laquelle ?",
              "Poids > 70 kg ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Échec de la contraception continue ?",
              "semaine de plaquette (patch / anneau) précédente ?",
              "RSNP ? Si oui, quand ?",
              "Autre RSNP depuis les dernières règles ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Médicaments pris régulièrement ?",
              "Tisanes / compléments alimentaires ?",
              "Autre CU (UPA – LNG) dans les 7 jours précédents ?"
            ]
          }
        ]
      },
      {
        "title": "Informations",
        "items": [
          {
            "label": "Alternatives et choix pour la patiente",
            "subs": [
              "CU nécessaire car semaine 1 et 2 pilules oubliées",
              "UPA car > 72h"
            ]
          },
          {
            "label": "BUM CU",
            "subs": [
              "Efficacité : pas 100 %",
              "Effets indésirables (troubles digestifs, retard de règles)",
              "Modalités de prise : nombre de comprimés ; que faire si vomissements (3h) ou diarrhées (24h)",
              "Prendre avec un verre d'eau"
            ]
          },
          {
            "label": "Sécurisation du cycle",
            "subs": [
              "la CU n'est pas un moyen contraceptif",
              "Pilules 1 et 2 oubliées donc attendre 5j entre UPA et Desorelle",
              "MCS 5 jours + 7 jours = 12 jours"
            ]
          },
          "Test de grossesse dans les 2,5 semaines (si symptômes ou pas de règles)",
          "Fiche CU distribuée / commentée",
          "Fiche IST"
        ]
      },
      {
        "title": "Attitude & Communication",
        "items": [
          "Valorisation de la démarche",
          "Justification du questionnement (ex : poids)",
          "Consignes précises",
          "Langage « patient » — pas de jargon",
          "Clôture : résumé — besoin d'autres informations ?",
          "Encodage médecin fictif pour remboursement"
        ]
      }
    ]
  },
  {
    "id": "custom-1780829768501",
    "plainte": "Contraception d'urgence",
    "variant": "Cas 5",
    "opening": "Bonjour, j'aurais besoin d'une contraception d'urgence.",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Patiente 24 ans."
      },
      {
        "q": "Poids ?",
        "a": "62 kg."
      },
      {
        "q": "Contraception ?",
        "a": "Noranelle 20."
      },
      {
        "q": "Prise ?",
        "a": "On est semaine 3 il lui reste 2 pilules."
      },
      {
        "q": "Quoi ?",
        "a": "Se questionne sur le risque de grossesse avec ces médicaments."
      },
      {
        "q": "RNSP ?",
        "a": "Oui il y a 4 jours."
      },
      {
        "q": "Autre RNSP ?",
        "a": "Non."
      },
      {
        "q": "Médicaments ?",
        "a": "Norit (Charbon) depuis 3 jours pour traiter une diarrhée (retour de voyage), enterol, imodium."
      },
      {
        "q": "Compléments ?",
        "a": "Non."
      },
      {
        "q": "Autre CU ?",
        "a": "Non."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Pour qui ?",
              "Contraception continue ? Si oui, laquelle ?",
              "Poids > 70 kg ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Échec de la contraception continue ?",
              "semaine de plaquette (patch / anneau) précédente ?",
              "RSNP ? Si oui, quand ?",
              "Autre RSNP depuis les dernières règles ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Médicaments pris régulièrement ?",
              "Tisanes / compléments alimentaires ?",
              "Autre CU (UPA – LNG) dans les 7 jours précédents ?"
            ]
          }
        ]
      },
      {
        "title": "Informations",
        "items": [
          {
            "label": "Alternatives et choix pour la patiente",
            "subs": [
              "CU pas nécessaire car semaine 3"
            ]
          },
          {
            "label": "BUM CU",
            "subs": [
              "Efficacité : pas 100 %",
              "Effets indésirables (troubles digestifs, retard de règles)",
              "Modalités de prise : nombre de comprimés ; que faire si vomissements (3h) ou diarrhées (24h)",
              "Prendre avec un verre d'eau"
            ]
          },
          {
            "label": "Sécurisation du cycle",
            "subs": [
              "Diarrhée + prise de charbon ! efficacité pilule",
              "Recommencer directement plaquette suivante (ne pas faire de pause de 7j)",
              "Espacer charbon de pilule (min 12h entre charbon et pilule ou min 3h entre pilule et charbon) + suivi diarrhée"
            ]
          },
          "Test de grossesse dans les 2,5 semaines (si symptômes ou pas de règles)",
          "Fiche CU distribuée / commentée",
          "Fiche IST"
        ]
      },
      {
        "title": "Attitude & Communication",
        "items": [
          "Valorisation de la démarche",
          "Justification du questionnement (ex : poids)",
          "Consignes précises",
          "Langage « patient » — pas de jargon",
          "Clôture : résumé — besoin d'autres informations ?",
          "Encodage médecin fictif pour remboursement"
        ]
      }
    ]
  },
  {
    "id": "custom-1780830173298",
    "plainte": "Contraception d'urgence",
    "variant": "Cas 6",
    "opening": "Bonjour, j'aurais besoin d'une contraception d'urgence.",
    "answers": [
      {
        "q": "Qui ?",
        "a": "Patiente 32 ans."
      },
      {
        "q": "Poids ?",
        "a": "78 kg."
      },
      {
        "q": "Contraception ?",
        "a": "Slinda."
      },
      {
        "q": "Prise ?",
        "a": "On est semaine 1."
      },
      {
        "q": "Quoi ?",
        "a": "Oublie semaine 1 (hier), pilule 2 (>24h d'oubli)."
      },
      {
        "q": "RNSP ?",
        "a": "Oui, il y a 3 jours."
      },
      {
        "q": "Autre RNSP ?",
        "a": "Non."
      },
      {
        "q": "Médicaments ?",
        "a": "Ibuprofène et omnibionta."
      },
      {
        "q": "Compléments ?",
        "a": "Non."
      },
      {
        "q": "Autre CU ?",
        "a": "Non."
      },
      {
        "q": "Allaitement ?",
        "a": "Oui depuis 3 mois."
      }
    ],
    "sections": [
      {
        "title": "Interrogatoire",
        "items": [
          {
            "label": "Qui ?",
            "subs": [
              "Pour qui ?",
              "Contraception continue ? Si oui, laquelle ?",
              "Allaitement ?",
              "Poids > 70 kg ?"
            ]
          },
          {
            "label": "Quoi ?",
            "subs": [
              "Échec de la contraception continue ?",
              "semaine de plaquette (patch / anneau) précédente ?",
              "RSNP ? Si oui, quand ?",
              "Autre RSNP depuis les dernières règles ?"
            ]
          },
          {
            "label": "Médicaments ?",
            "subs": [
              "Médicaments pris régulièrement ?",
              "Tisanes / compléments alimentaires ?",
              "Autre CU (UPA – LNG) dans les 7 jours précédents ?"
            ]
          }
        ]
      },
      {
        "title": "Informations",
        "items": [
          {
            "label": "Alternatives et choix pour la patiente",
            "subs": [
              "CU nécessaire car semaine 1 et RNSP durant comprimés \"placebos\"",
              "LNG OK car <72h et plus facile pour reprise",
              "3 mg car >70 kg"
            ]
          },
          {
            "label": "BUM CU",
            "subs": [
              "Efficacité : pas 100 %",
              "Effets indésirables (troubles digestifs, retard de règles)",
              "Modalités de prise : nombre de comprimés ; que faire si vomissements (3h) ou diarrhées (24h)",
              "Prendre avec un verre d'eau"
            ]
          },
          {
            "label": "Sécurisation du cycle",
            "subs": [
              "la CU n'est pas un moyen contraceptif",
              "Prendre dernière pilule oubliée + celle du jour",
              "MCS durant 7 jours"
            ]
          },
          "Test de grossesse dans les 2,5 semaines (si symptômes ou pas de règles)",
          "Fiche CU distribuée / commentée",
          "Fiche IST"
        ]
      },
      {
        "title": "Attitude & Communication",
        "items": [
          "Valorisation de la démarche",
          "Justification du questionnement (ex : poids)",
          "Consignes précises",
          "Langage « patient » — pas de jargon",
          "Clôture : résumé — besoin d'autres informations ?",
          "Encodage médecin fictif pour remboursement"
        ]
      }
    ]
  },
  {
    "id": "insuline-premiere",
    "plainte": "Insulines",
    "variant": "Cas 1",
    "opening": "Bonjour, mon médecin vient de me prescrire de l'insuline en stylo. Je n'en ai jamais fait, je suis un peu perdu(e)… pouvez-vous m'expliquer comment ça marche et comment l'utiliser ?",
    "answers": [],
    "sections": [
      {
        "title": "Introduction",
        "items": [
          {
            "label": "Préparation du stylo",
            "subs": [
              "Sortir le stylo du frigo ~30 min à 1 h avant la 1ère utilisation (froid = douloureux + moins bien absorbé)",
              "Se laver les mains",
              "Si insuline trouble/laiteuse : retourner le stylo ~10× pour homogénéiser",
              "Retirer le capuchon / insérer la cartouche (stylo réutilisable)"
            ]
          },
          {
            "label": "Fixation de l'aiguille",
            "subs": [
              "Retirer le capuchon externe et le capuchon interne",
              "Visser l'aiguille bien dans l'axe (l'aiguille interne doit percer la membrane du stylo)"
            ]
          },
          {
            "label": "Pourquoi changer d'aiguille ?",
            "subs": [
              "Éviter la lipodystrophie (amas de graisse dû à une mauvaise technique)",
              "Aiguille réutilisée : risque de blessure (aiguille qui se casse) / d'infection (plus stérile)",
              "Aiguille qui se bouche : dose d'insuline injectée incorrecte"
            ]
          },
          {
            "label": "Purger le stylo",
            "subs": [
              "Régler sur 2 unités, aiguille vers le haut, appuyer jusqu'à voir une goutte",
              "Eviter les bulles d'air (unités d'insuline en moins)",
              "Vérification si aiguille pas bouchée"
            ]
          }
        ]
      },
      {
        "title": "Injection",
        "items": [
          "Sélectionner le nombre d'unités à injecter",
          "Enlever le capuchon de l'aiguille",
          "Palper avant d'injecter (ne pas injecter dans une lipodystrophie)",
          "Ne pas injecter dans un bleu, une cicatrice, sur peau nue (pas à travers les vêtements)",
          {
            "label": "Choix du site selon l'insuline",
            "subs": [
              "Ventre : insuline rapide (à ~5 cm du nombril)",
              "Cuisse / fesse : insuline lente",
              "Rotation des sites d'injection (évite les lipodystrophies)"
            ]
          },
          "Pas de pli en général (sauf enfant < 6 ans, patient très maigre, ou aiguille 8 mm) — à l'inverse des HBPM",
          "Piquer à 90° dans la peau",
          "Appuyer sur le bouton jusqu'à ce que le compteur de dose revienne à 0",
          "Compter jusqu'à 10 avant de retirer le stylo de la peau (dose complète)",
          "Ne pas masser le site d'injection après (comprimer si besoin)"
        ]
      },
      {
        "title": "Après l'injection",
        "items": [
          "Dévisser l'aiguille et la jeter dans un container à aiguilles adapté",
          "Ne pas laisser l'aiguille sur le stylo",
          "Sinon : avec le froid l'air rentre (bulles), avec la chaleur l'insuline sort / cristallise → dose faussée"
        ]
      },
      {
        "title": "Conservation",
        "items": [
          "Avant utilisation : au frigo (2–8 °C)",
          "En cours d'utilisation : ne pas remettre au frigo, conserver ~4 semaines < 30 °C (Tresiba®/Levemir® 6 sem., Toujeo® 8 sem.)",
          "À l'abri de la chaleur et de la lumière directe"
        ]
      },
      {
        "title": "Hypoglycémie & sécurité",
        "items": [
          "Effet secondaire principal : l'hypoglycémie",
          {
            "label": "Reconnaître une hypoglycémie",
            "subs": [
              "Palpitations, nervosité, pâleur",
              "Sensation de faim, vertiges, confusion, sueurs"
            ]
          },
          {
            "label": "Gérer une hypoglycémie (patient conscient)",
            "subs": [
              "Prendre 3–4 morceaux de sucre (resucrage rapide)",
              "Après 15 min : sucres lents (tartine, biscuit)"
            ]
          },
          "Patient inconscient : ne rien donner par la bouche → glucagon / appel des secours",
          "Bains chauds, sauna et exercice physique augmentent l'absorption d'insuline (risque d'hypo)"
        ]
      },
      {
        "title": "Glucomètre",
        "items": [
          "Se laver les mains à l'eau et au savon (ne pas désinfecter à l'alcool)",
          {
            "label": "Préparer le matériel",
            "subs": [
              "Allumer le glucomètre",
              "Insérer la bandelette (tigette) dans le bon sens",
              "Insérer une lancette à usage unique dans l'autopiqueur",
              "Régler la profondeur de piqûre (3–5 chez l'adulte)"
            ]
          },
          {
            "label": "Prélever la goutte",
            "subs": [
              "Piquer sur le côté du bout du doigt (éviter index et pouce, éviter la pulpe centrale)",
              "Masser le doigt pour former une belle goutte",
              "Déposer la goutte sur le côté/devant de la tigette (capillarité)",
              "Attendre quelques secondes le résultat"
            ]
          },
          {
            "label": "Interpréter les valeurs",
            "subs": [
              "À jeun normal : 0,70–1,10 g/L",
              "Après repas (2 h) normal : < 1,40 g/L",
              "Pré-diabète : à jeun > 1,26 g/L ; 1,40–2,0 g/L après repas",
              "Diabète/hyperglycémie : > 2,0 g/L après repas"
            ]
          },
          "Éliminer la tigette/lancette dans la boîte à aiguilles usagées"
        ]
      },
      {
        "title": "Clôture",
        "items": [
          "S'assure de la compréhension / fait reformuler",
          "Questions du patient / clôture"
        ]
      }
    ]
  },
  {
    "id": "heparine-premiere",
    "plainte": "Héparines",
    "variant": "Cas 1",
    "opening": "Bonjour, j'ai une ordonnance pour des piqûres dans le ventre, de la Clexane. C'est la première fois, je ne sais pas du tout comment faire ni à quoi faire attention…",
    "answers": [
      {
        "q": "Poids ?",
        "a": "Je pèse 72 kg."
      },
      {
        "q": "Âge ?",
        "a": "J'ai 60 ans."
      },
      {
        "q": "Indication ?",
        "a": "C'est suite à une phlébite à la jambe (thrombose)."
      },
      {
        "q": "Posologie ?",
        "a": "Sur l'ordonnance c'est marqué Clexane, en 2 injections par jour."
      },
      {
        "q": "Reins ?",
        "a": "Je ne connais pas ma fonction rénale, on ne m'en a pas parlé."
      },
      {
        "q": "Autres médicaments ?",
        "a": "Je prends parfois de l'ibuprofène quand j'ai mal, et je voulais commencer des oméga-3."
      },
      {
        "q": "Antécédents saignement ?",
        "a": "Non, pas de problème de saignement connu."
      }
    ],
    "sections": [
      {
        "title": "Qui / Quoi / Médicament",
        "items": [
          "Repère qu'il s'agit d'un médicament à haut risque (HBPM)",
          {
            "label": "Profil du patient",
            "subs": [
              "Poids (adaptation de la dose au poids en traitement)",
              "Âge (patient âgé = prudence)",
              "Fonction rénale / vulnérabilité (insuffisance rénale)",
              "Autres médicaments"
            ]
          },
          {
            "label": "Demande l'indication",
            "subs": [
              "Traitement ou prévention d'une TVP / EP",
              "Prévention en chirurgie / immobilisation prolongée",
              "Reconnaît : 2×/jour = dose thérapeutique (traitement)"
            ]
          }
        ]
      },
      {
        "title": "Analyse",
        "items": [
          "Valide l'indication ET la dose (tableau dose vs indication au comptoir)",
          "Vérifie l'adaptation au poids (petit poids = risque hémorragique)",
          {
            "label": "Recherche les interactions",
            "subs": [
              "Risque hémorragique : AINS, ISRS, IRSN, autres antithrombotiques",
              "Jamais en même temps qu'un AOD (notion de shift)",
              "Risque d'hyperkaliémie : IEC, sartans, diurétiques épargneurs de K, AINS"
            ]
          }
        ]
      },
      {
        "title": "Décision",
        "items": [
          "Décide : délivrance OK ou appel au médecin ?",
          "Appelle le médecin si dose/indication non concordante (ex. petit poids, IR sévère)",
          "IR sévère (< 30 mL/min) : Clexane® traitement à dose réduite ; Fraxiparine/Fraxodi contre-indiquées"
        ]
      },
      {
        "title": "Information patient — préparation",
        "items": [
          "Se laver les mains et nettoyer la zone avec un tampon d'alcool",
          "Position assise, confortable",
          "Vérifier que la solution est bien limpide",
          "Retirer le capuchon de protection de l'aiguille",
          "Ne pas chasser la bulle d'air (perte de médicament)",
          "Ne pas laisser l'aiguille toucher quelque chose (stérilité)"
        ]
      },
      {
        "title": "Information patient — injection",
        "items": [
          "Choisir une zone à ~5 cm du nombril (à droite ou à gauche), alterner les sites",
          "Pincer la peau entre le pouce et l'index, maintenir le pli pendant toute l'injection",
          "Introduire l'aiguille à 90°, sur toute sa longueur, dans le pli",
          "Ne pas injecter dans un hématome, une cicatrice ou un tatouage",
          "Appuyer sur le piston et injecter pendant ~30 secondes",
          "Retirer l'aiguille tout droit puis lâcher le pli",
          "Ne pas frotter ni masser le site d'injection",
          "Jeter la seringue dans un container à aiguilles"
        ]
      },
      {
        "title": "Interactions & automédication",
        "items": [
          "Pas d'AINS en vente libre (ibuprofène, aspirine) : risque hémorragique",
          "Jamais en même temps qu'un AOD (savoir expliquer le shift)",
          {
            "label": "Compléments à éviter",
            "subs": [
              "Oméga-3, curcuma, ail",
              "Gingembre, ginseng, ginkgo"
            ]
          },
          "Contacter un médecin après un choc violent (risque de saignement interne)",
          "Reconnaître un saignement interne : pâleur, fatigue, mal de tête, malaise inexpliqué, essoufflement"
        ]
      },
      {
        "title": "Surveillance & clôture",
        "items": [
          {
            "label": "Assurer un suivi biologique",
            "subs": [
              "Fonction rénale (demander si patient âgé, sinon via le médecin)",
              "Plaquettes si traitement > 5 jours (risque de thrombopénie)",
              "Kaliémie (risque d'hyperkaliémie)"
            ]
          },
          "Vérifier qu'un suivi sera fait avec le médecin traitant",
          "S'assurer de la compréhension / fait reformuler la technique",
          "Questions du patient / clôture"
        ]
      }
    ]
  }
];

/* ---------- Pièges / erreurs fréquentes par cas (extraits du PDF) ---------- */
const PITFALLS = {
  "brulure-bebe": ["Conseille de mettre de la glace", "Délivre la crème sans interrogatoire", "Rend le pansement obligatoire", "Oublie de questionner la maltraitance"],
  "brulure-adulte": ["Délivre la Flammazine (sans intérêt, < hydrogel)", "Conseille de percer les cloques", "Conseille de mettre de la glace", "Oublie le statut vaccinal tétanos", "Néglige le risque lié au diabète"],
  "hemorroides-1": ["Propose une crème aux corticoïdes malgré le sang", "Ne réfère pas vers le médecin (> 50 ans)", "Ne propose pas de colotest", "Délivre sans interroger sur le sang / les selles"],
  "hemorroides-2": ["Autorise l'ibuprofène (enceinte)", "Donne un corticoïde plus de 1-2 semaines", "Néglige la lutte contre la constipation"],
  "yeux-secs-1": ["Délivre un collyre antibiotique / désinfectant", "Oublie les mesures hygiéno-diététiques (écrans, 20-20-20)", "Ne questionne pas le travail sur écran"],
  "yeux-secs-2": ["Conseille un collyre avec conservateurs (port de lentilles)", "Conseille d'arrêter la pilule (CI Roaccutane)", "Ignore le Roaccutane"],
  "rhinite-1": ["Délivre sans questionner les signaux d'alarme", "Oublie les conseils non pharmacologiques"],
  "rhinite-2": ["Ne vérifie pas le contrôle de l'asthme", "Promet un effet immédiat du mométasone (min 4 jours)"],
  "gorge-1": ["Délivre un AINS / le Strepfen (enceinte)", "Ne réfère pas (risque CMV)", "Propose Collutabs / Strepsils / Thymospray / Colludol (enceinte)"],
  "gorge-2": ["Recommande la Sédergine (aspirine)", "Ne vérifie pas le contrôle de l'asthme"],
  "ongle-1": ["Promet la disparition de la tache avec le produit", "Sous-estime la durée du traitement (9-12 mois)"],
  "ongle-2": ["Promet une disparition rapide avant l'été", "Oublie les conseils d'hygiène (pieds, chaussettes)"],
  "mycose-vag-1": ["Délivre une crème corticoïde", "Oublie d'évoquer l'anneau comme cause", "Délivre sans questionner la grossesse"],
  "mycose-vag-2": ["Traite le partenaire systématiquement", "Néglige le contrôle glycémique (diabète)", "Délivre sans questionner le diabète"],
  "sommeil-1": ["Propose d'emblée un hypnotique sans mesures hygiéno-diététiques", "Néglige l'équilibre de la L-Thyroxine"],
  "sommeil-2": ["Propose un médicament sans aborder l'hygiène du sommeil", "Ne propose pas de consultation si besoin"],
  "cystite-1": ["Délivre un antibiotique sans ordonnance", "Délivre sans écarter les signes d'alerte"],
  "cystite-2": ["Prend en charge sans prudence malgré le diabète", "N'évoque pas le Jardiance comme cause possible", "Ne propose pas d'orienter vers le médecin"],
  "toux-1": ["Délivre le Muco Rhinathiol / un sirop (CI < 2 ans)", "Délivre un antitussif", "Oublie le rinçage de nez au sérum physiologique"],
  "toux-2": ["Donne un sirop au dextrométhorphane (toux grasse)", "Donne du miel sans prévenir (diabète)", "Conseille le sirop tard le soir"],
  "contraception-urgence": ["Délivre sans interroger (poids, délai, autre CU)", "Présente la CU comme un moyen contraceptif régulier", "Oublie la fiche IST / le test de grossesse"],
};

/* ---------- Stockage admin (cas ajoutés / modifiés / masqués) ---------- */
const ADMIN_STORE_KEY = 'osce_admin_cases_v1';
function loadAdminStore() {
  try { const r = localStorage.getItem(ADMIN_STORE_KEY); const s = r ? JSON.parse(r) : null; return (s && s.overrides) ? { overrides: s.overrides, hidden: s.hidden || [] } : { overrides: {}, hidden: [] }; }
  catch (e) { return { overrides: {}, hidden: [] }; }
}
function saveAdminStore(store) { try { localStorage.setItem(ADMIN_STORE_KEY, JSON.stringify(store)); } catch (e) {} if (window.cloudPushAdmin) cloudPushAdmin(store); }
function isBaseCase(id) { return CASES.some(c => c.id === id); }

/* Liste effective : cas de base (éventuellement remplacés/masqués) + cas personnalisés. */
function effectiveCases() {
  const store = loadAdminStore();
  const baseIds = new Set(CASES.map(c => c.id));
  const list = [];
  CASES.forEach(c => { if (store.hidden.includes(c.id)) return; list.push(store.overrides[c.id] || c); });
  Object.keys(store.overrides).forEach(id => {
    if (!baseIds.has(id) && !store.hidden.includes(id)) list.push(store.overrides[id]);
  });
  return list;
}

/* Regroupe les cas par plainte, dans l'ordre d'apparition. */
function casesByPlainte() {
  const groups = [];
  const index = {};
  effectiveCases().forEach(c => {
    if (!(c.plainte in index)) { index[c.plainte] = groups.length; groups.push({ plainte: c.plainte, cases: [] }); }
    groups[index[c.plainte]].cases.push(c);
  });
  return groups;
}
function getCase(id) {
  const c = effectiveCases().find(c => c.id === id);
  if (!c) return null;
  return c.pitfalls ? c : Object.assign({}, c, { pitfalls: PITFALLS[id] || [] });
}

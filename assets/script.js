// script.js - Version ULTIME avec TOUS les effets - MODE SELFIE COMPLET
// CORRIGÉ : Mode selfie - annulation des caresses à deux mains
// CORRIGÉ : Mode selfie - seule la MAIN LIBRE fait les gestes
// CORRIGÉ : Mode selfie - bras TENDU, téléphone INVISIBLE
// CORRIGÉ : Mode selfie - transition BAISER + FLASH NOIR
// AJOUTÉ : Dialogue avec synchro labiale parfaite

console.log("🚀 Chargement de script.js...");

// Exposer les fonctions de actions.js
if (typeof personnageActions !== 'undefined' && !window.personnageActions) {
    window.personnageActions = personnageActions;
    window.getRandomDecor = getRandomDecor;
    window.getRandomAction = getRandomAction;
    console.log("✅ actions.js exposé globalement");
}

// ==================== CLASSE PRINCIPALE ====================
class PromptGenerator {
    constructor() {
        this.userData = {};
        this.typeMapping = {
            'default': 'pirate',
            'fairy': 'fairy',
            'vampire': 'vampire',
            'elf': 'elf',
            'superman': 'superman',
            'cowgirl': 'cowgirl',
            'pirate': 'pirate',
            'princess': 'princess',
            'siren': 'siren',
            'cavewoman': 'cavewoman',
            'athena': 'athena',
            'avatar': 'avatar',
            'avatarwarrior': 'avatarwarrior',
            'avatarchief': 'avatarchief'
        };
    }

    getActionType(personnageKey) {
        if (!countries || !countries[personnageKey]) return 'default';
        let type = countries[personnageKey].type || personnageKey;
        const actions = window.personnageActions || {};
        if (actions[type]) return type;
        if (this.typeMapping[type]) return this.typeMapping[type];
        return 'default';
    }

    getRandomDecor(personnageKey) {
        if (typeof window.getRandomDecor === 'function') return window.getRandomDecor(personnageKey);
        return "dans un studio de danse professionnel";
    }

    getRandomAction(personnageKey) {
        if (typeof window.getRandomAction === 'function') return window.getRandomAction(personnageKey);
        return "elle danse sensuellement face caméra";
    }

    // ===== DÉCOR UNIFIÉ =====
    getUnifiedDecor() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) return "studio professionnel";
        const countryKey = selected.dataset.country;
        const country = countries[countryKey];
        const customEnabled = document.getElementById('enableCustomDecor')?.checked || false;
        const customText = document.getElementById('customDecorText')?.value || '';
        if (customEnabled && customText.trim() !== '') return customText.trim();
        const actionType = this.getActionType(countryKey);
        const randomDecor = this.getRandomDecor(actionType);
        if (randomDecor && randomDecor !== "studio professionnel") return randomDecor;
        if (country && country.background) return country.background;
        return "dans un studio de danse professionnel avec éclairages tamisés";
    }

    // ===== FINALE SPECTACULAIRE =====
    getFinaleGesture() {
        const animalBabyModeEnabled = document.getElementById('enableAnimalBabyMode')?.checked || false;
        const animalType = document.getElementById('animalBabyType')?.value || 'chiot';
        const animalNom = animalType === 'chiot' ? 'son chiot' : 'son chaton';
        
        if (animalBabyModeEnabled) {
            return `FINALE SPÉCIALE MODE CÂLIN (dernière seconde) :
À LA SECONDE 5 EXACTEMENT :
- Elle serre ${animalNom} TRÈS FORT contre elle dans un dernier CÂLIN intense
- Elle pose sa joue sur sa tête, FERME LES YEUX avec un sourire de pur bonheur
- Puis elle OUVRE LENTEMENT LES YEUX vers la CAMÉRA, regard SÉDUCTEUR et COMPLICE
- Elle lui fait un dernier BISOU TENDRE sur le front tout en fixant le spectateur
- Elle le PRÉSENTE fièrement à la caméra au niveau des seins
- FREEZE sur cette image de BONHEUR PARTAGÉ`;
        }
        
        const finaleGestures = [];
        if (document.getElementById('finalBisou')?.checked) finaleGestures.push('elle envoie UN DERNIER BISOU LANGOUREUX à la caméra, ses doigts effleurant ses lèvres avant de s\'ouvrir lentement');
        if (document.getElementById('finalCiao')?.checked) finaleGestures.push('elle fait un "CIAO" SENSUEL de la main, ses doigts bougeant gracieusement comme des vagues');
        if (document.getElementById('finalMasque')?.checked) finaleGestures.push('elle RAPPROCHE SES MAINS DE L\'OBJECTIF pour masquer l\'écran');
        if (document.getElementById('finalCoeur')?.checked) finaleGestures.push('elle forme un CŒUR AVEC SES MAINS au-dessus de sa tête');
        if (document.getElementById('finalClignement')?.checked) finaleGestures.push('elle fait un LONG CLIN D\'ŒIL APPUYÉ, presque un slow blink');
        if (document.getElementById('finalCascade')?.checked) finaleGestures.push('elle envoie une CASCADE DE BISOUS du bout des doigts');
        if (document.getElementById('finalRevelation')?.checked) finaleGestures.push('elle ÉCARTE LES BRAS dans un geste théâtral de révélation');
        if (document.getElementById('finalSalut')?.checked) finaleGestures.push('elle exécute une RÉVÉRENCE GRACIEUSE');
        if (document.getElementById('finalRegard')?.checked) finaleGestures.push('elle FIXE LA CAMÉRA INTENSÉMENT pendant 2 secondes');
        if (document.getElementById('finalViens')?.checked) finaleGestures.push('elle fait un DERNIER GESTE "VIENS VERS MOI" avec l\'index');
        if (document.getElementById('finalSouffle')?.checked) finaleGestures.push('elle ENVOIE UN SOUFFLE SENSUEL vers la caméra');
        if (document.getElementById('finalEpaule')?.checked) finaleGestures.push('elle DÉCOUVRE LENTEMENT SON ÉPAULE en faisant glisser le tissu');
        if (document.getElementById('finalCheveux')?.checked) finaleGestures.push('elle REJETTE SES CHEVEUX EN ARRIÈRE d\'un geste lent et sensuel');
        
        if (finaleGestures.length === 0) return 'elle envoie un dernier bisou du bout des doigts, suivit d\'un clin d\'œil complice';
        if (finaleGestures.length === 1) return finaleGestures[0];
        const lastGesture = finaleGestures.pop();
        if (finaleGestures.length === 1) return finaleGestures[0] + ' puis ' + lastGesture;
        return finaleGestures.join(', ') + ', puis enfin ' + lastGesture;
    }

    getFinalOption() {
        const option = document.getElementById('finalOption')?.value || 'freeze';
        const duree = document.getElementById('finalMaintien')?.value || '2';
        const emotion = document.getElementById('finalEmotion')?.value || 'satisfaite';
        const options = {
            'freeze': `l'image se fige sur CE MOMENT PRÉCIS, ses yeux continuant de vivre, un léger sourire ${emotion} aux lèvres, pendant ${duree} secondes`,
            'fondu': `un FONDU AU NOIR PROGRESSIF enveloppe l'image pendant ${duree} secondes`,
            'fonduBlanc': `un FONDU AU BLANC LUMINEUX l'illumine pendant ${duree} secondes`,
            'zoom': `un ZOOM LENT ET DOUX sur son visage pendant ${duree} secondes`,
            'flou': `un FLOU ARTISTIQUE PROGRESSIF pendant ${duree} secondes`
        };
        return options[option] || options['freeze'];
    }

    getPublicInteraction() {
        const interaction = document.getElementById('finalInteraction')?.value || 'regard';
        const interactions = {
            'regard': 'elle plonge son regard DROIT DANS LES YEUX DU SPECTATEUR',
            'sourire': 'elle offre un SOURIRE ÉCLATANT ET PERSONNEL',
            'clin': 'elle fait un CLIN D\'ŒIL COMPLICE',
            'main': 'elle TEND LA MAIN vers l\'écran',
            'tous': 'elle ALTERNATE REGARD, SOURIRE ET CLIN D\'ŒIL'
        };
        return interactions[interaction] || interactions['regard'];
    }

    // ===== SCRIPT DU PERSONNAGE =====
    generateScript() {
        if (!document.getElementById('enableScript')?.checked) return '';
        const scriptText = document.getElementById('scriptText')?.value;
        if (!scriptText) return '';
        const part1 = document.getElementById('scriptPart1')?.checked ? `En partie 1, elle dit: "${scriptText}"` : '';
        const part2 = document.getElementById('scriptPart2')?.checked ? `En partie 2, elle dit: "${scriptText}"` : '';
        const final = document.getElementById('scriptFinal')?.checked ? `À la fin, elle dit: "${scriptText}"` : '';
        const scripts = [part1, part2, final].filter(s => s).join(' ');
        return `\n\n🎤 SCRIPT DU PERSONNAGE :\n${scripts}`;
    }

    // ===== TEXTES MAGIQUES FLOTTANTS =====
    generateFloatingWords(partie) {
        if (!document.getElementById('enableMagicTexts')?.checked) return '';
        const words = [];
        if (document.getElementById('textFollow')?.checked) words.push('"Follow Me"');
        if (document.getElementById('textLike')?.checked) words.push('"Like Me"');
        if (document.getElementById('textLuna')?.checked) words.push('"@luna_wells"');
        if (document.getElementById('textSubscribe')?.checked) words.push('"Subscribe"');
        if (document.getElementById('textLove')?.checked) words.push('"Love Me"');
        if (document.getElementById('textWatch')?.checked) words.push('"Watch Me"');
        if (document.getElementById('textHeart')?.checked) words.push('❤️ (cœurs)');
        if (document.getElementById('textStar')?.checked) words.push('✨ (étoiles)');
        const customText = document.getElementById('customText')?.value;
        if (customText) words.push(`"${customText}"`);
        if (words.length === 0) return '';
        
        const effect = document.getElementById('textEffect')?.value || 'neon';
        const movement = document.getElementById('textMovement')?.value || 'float';
        const color = document.getElementById('textColor')?.value || '#ff6b6b';
        const color2 = document.getElementById('textColor2')?.value || '#4ecdc4';
        const size = document.getElementById('textSize')?.value || 'medium';
        const quantity = document.getElementById('textQuantity')?.value || 'medium';
        const position = document.getElementById('textPosition')?.value || 'around';
        const sizeText = { small: 'petits', medium: 'moyens', large: 'grands', xlarge: 'très grands' }[size] || 'moyens';
        const quantityText = { few: '3-4', medium: '5-7', many: '8-10' }[quantity] || '5-7';
        const specialEffects = [];
        if (document.getElementById('effectSparkle')?.checked) specialEffects.push('scintillement');
        if (document.getElementById('effectPulse')?.checked) specialEffects.push('pulsation');
        if (document.getElementById('effectFade')?.checked) specialEffects.push('apparition/disparition progressive');
        if (document.getElementById('effectTrail')?.checked) specialEffects.push('traînée lumineuse');
        if (document.getElementById('effectShadow')?.checked) specialEffects.push('ombre portée');
        if (document.getElementById('effect3d')?.checked) specialEffects.push('effet 3D');
        const timing = document.getElementById('textTiming')?.value || 'whole';
        if (timing === 'part2' && partie === 'part1') return '';
        if (timing === 'transition' && partie !== 'part2') return '';
        
        return `
✨ EFFETS TEXTES MAGIQUES ${partie === 'part1' ? 'PENDANT LA PREMIÈRE PARTIE' : 'PENDANT LA DEUXIÈME PARTIE'} ✨
- Des textes ${words.join(', ')} apparaissent et flottent dans l'air autour d'elle
- Style d'affichage : ${effect}
- Mouvement : ${movement}
- Couleurs : ${color} (principal) et ${color2} (secondaire)
- Taille : ${sizeText}
- Quantité : ${quantityText} textes
- Position : ${position}
- Effets supplémentaires : ${specialEffects.join(', ')}`;
    }

    // ===== MODE ALIEN =====
    generateAlienTransformations() {
        if (!document.getElementById('enableAlienMode')?.checked) return '';
        let alienText = '\n\n👽 TRANSFORMATIONS EXTRA-TERRESTRES :\n';
        let hasFeatures = false;
        if (document.getElementById('alienSkin')?.checked) {
            const color = document.getElementById('alienSkinColor')?.value || 'argent';
            alienText += `- Peau transformée : texture ${color} irisée, effet métal liquide\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienEyes')?.checked) {
            const color = document.getElementById('alienEyesColor')?.value || 'rouge';
            alienText += `- Yeux : devenus lumineux, couleur ${color}\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienAntenna')?.checked) {
            const style = document.getElementById('antennaStyle')?.value || 'antennes';
            const styleText = { 'antennes': 'Antennes fines', 'cornes': 'Cornes stylisées', 'couronne': 'Couronne lumineuse', 'halo': 'Halo de lumière', 'tentacules': 'Tentacules' }[style] || 'Antennes';
            alienText += `- ${styleText} sur la tête\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienGlow')?.checked) {
            const color = document.getElementById('glowColor')?.value || 'bleu';
            alienText += `- Corps phosphorescent : lueur ${color}\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienTattoos')?.checked) {
            const style = document.getElementById('tattooStyle')?.value || 'symboles';
            alienText += `- Tatouages lumineux : motifs ${style}\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienHolograms')?.checked) {
            const type = document.getElementById('hologramType')?.value || 'etoiles';
            const typeText = { 'etoiles': 'étoiles filantes', 'planetes': 'planètes miniatures', 'symboles': 'symboles mystiques', 'energie': 'sphères d\'énergie', 'animaux': 'créatures holographiques' }[type] || 'hologrammes';
            alienText += `- Hologrammes flottants : des ${typeText}\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienVoice')?.checked) alienText += `- Voix modulée\n`;
        if (document.getElementById('alienGravity')?.checked) alienText += `- Effet apesanteur\n`;
        if (document.getElementById('alienTeleportation')?.checked) alienText += `- Effet téléportation\n`;
        return hasFeatures ? alienText : '';
    }

    // ===== MODE AVATAR =====
    generateAvatarTransformations() {
        if (!document.getElementById('enableAvatarMode')?.checked) return '';
        let avatarText = '\n\n🔵 TRANSFORMATIONS AVATAR (NA\'VI) :\n';
        const keepFace = document.getElementById('avatarKeepFace')?.checked || false;
        if (keepFace) avatarText += `- ⚠️ VISAGE HUMAIN CONSERVÉ : le visage reste STRICTEMENT IDENTIQUE à l'image de référence\n`;
        if (document.getElementById('avatarFullBody')?.checked) {
            const skinTone = document.getElementById('avatarSkinTone')?.value || 'bleu nuit';
            avatarText += `- Corps Na'vi complet : peau ${skinTone}\n`;
        }
        if (document.getElementById('avatarEars')?.checked) avatarText += `- Oreilles pointues\n`;
        if (document.getElementById('avatarTail')?.checked) {
            const tailStyle = document.getElementById('avatarTailStyle')?.value || 'fine';
            avatarText += `- Queue ${tailStyle} et expressive\n`;
        }
        if (document.getElementById('avatarStripes')?.checked) {
            const stripeStyle = document.getElementById('avatarStripesStyle')?.value || 'fines';
            const stripeColor = document.getElementById('avatarStripesColor')?.value || 'blanc';
            avatarText += `- Rayures lumineuses ${stripeStyle} de couleur ${stripeColor}\n`;
        }
        if (document.getElementById('avatarBioluminescence')?.checked) avatarText += `- Points bioluminescents\n`;
        if (document.getElementById('avatarTattoos')?.checked) avatarText += `- Peintures tribales Na'vi\n`;
        return avatarText;
    }

    // ===== MODE ANIMAL =====
    generateAnimalTransformations() {
        if (typeof window.animalData === 'undefined') return '';
        if (!document.getElementById('enableAnimalMode')?.checked) return '';
        const type = document.getElementById('animalType')?.value || 'chatte';
        const color = document.getElementById('animalColor')?.value || '';
        const keepFace = document.getElementById('animalKeepFace')?.checked || false;
        const ears = document.getElementById('animalEars')?.checked || false;
        const tail = document.getElementById('animalTail')?.checked || false;
        const fur = document.getElementById('animalFur')?.checked || false;
        const eyes = document.getElementById('animalEyes')?.checked || false;
        const claws = document.getElementById('animalClaws')?.checked || false;
        const animal = window.animalData?.[type];
        if (!animal) return '';
        let animalText = '\n\n🐾 TRANSFORMATION ANIMALE :\n';
        if (keepFace) animalText += `- ⚠️ VISAGE HUMAIN CONSERVÉ\n`;
        else animalText += `- Transformation COMPLÈTE en ${animal.name}\n`;
        if (ears) animalText += `- ${animal.traits.oreilles}\n`;
        if (tail) animalText += `- ${animal.traits.queue}\n`;
        if (fur) animalText += `- ${animal.traits.fourrure || 'Fourrure texturée'}\n`;
        if (eyes) animalText += `- ${animal.traits.yeux}\n`;
        if (claws) animalText += `- ${animal.traits.griffes || 'Griffes'}\n`;
        if (color) animalText += `- Robe/couleur : ${color}\n`;
        return animalText;
    }

    // ===== OPTIONS SPÉCIALES =====
    generateSpecialFeatures() {
        let specialText = '';
        let hasFeatures = false;
        if (document.getElementById('enable-eyes')?.checked) {
            const eyeLeft = document.getElementById('eye-left-select')?.value || 'bleu';
            const eyeRight = document.getElementById('eye-right-select')?.value || 'marron';
            specialText += `\n👁️ YEUX ULTRA-RÉALISTES 8K (HÉTÉROCHROMIE) :\n- Œil GAUCHE : ${eyeLeft}\n- Œil DROIT : ${eyeRight}\n- Vaisseaux sanguins visibles, reflets multiples, film lacrymal\n`;
            hasFeatures = true;
        }
        if (document.getElementById('enable-skin')?.checked) {
            const skinColor = document.getElementById('skin-color-select')?.value || 'blanc';
            specialText += `\n🎨 TACHES DE NAISSANCE / VITILIGO :\n- ${skinColor} skin patches\n- Contours naturels, texture de peau préservée\n`;
            hasFeatures = true;
        }
        return hasFeatures ? specialText : '';
    }

    // ===== EFFETS AVANCÉS =====
    generateAdvancedEffects() {
        const effects = [];
        if (document.getElementById('effectExplosion')?.checked) effects.push('explosion de couleurs');
        if (document.getElementById('effectTeleportation')?.checked) effects.push('téléportation');
        if (document.getElementById('effectMirror')?.checked) effects.push('effet miroir');
        if (document.getElementById('effectTimeLapse')?.checked) effects.push('accéléré puis ralenti');
        if (document.getElementById('effectHologram')?.checked) effects.push('hologrammes');
        if (document.getElementById('effectClone')?.checked) effects.push('clones');
        if (document.getElementById('effectFeu')?.checked) effects.push('flammes');
        if (document.getElementById('effectEau')?.checked) effects.push('vagues');
        if (document.getElementById('effectGlace')?.checked) effects.push('cristaux de glace');
        if (document.getElementById('effectEclairs')?.checked) effects.push('éclairs');
        if (document.getElementById('effectPapillons')?.checked) effects.push('papillons');
        if (document.getElementById('effectPlumes')?.checked) effects.push('plumes');
        if (document.getElementById('effectLaser')?.checked) effects.push('lasers');
        if (document.getElementById('effectBulles')?.checked) effects.push('bulles');
        if (effects.length === 0) return '';
        const surpriseLevel = document.getElementById('surpriseLevel')?.value || 7;
        const surpriseText = surpriseLevel <= 3 ? 'surprise subtile' : surpriseLevel <= 6 ? 'effet wow' : surpriseLevel <= 8 ? 'explosion visuelle' : 'EXPÉRIENCE HALLUCINANTE';
        return `\nEFFETS SPECTACULAIRES AVANCÉS (${surpriseText}) : ${effects.join(', ')}.`;
    }

    // ===== GÉNÉRATION DU DIALOGUE =====
    generateDialogue() {
        if (!document.getElementById('enableScript')?.checked) return '';
        const scriptText = document.getElementById('scriptText')?.value;
        if (!scriptText) return '';
        const part1 = document.getElementById('scriptPart1')?.checked;
        const part2 = document.getElementById('scriptPart2')?.checked;
        const final = document.getElementById('scriptFinal')?.checked;
        let dialogueText = '';
        if (part1) dialogueText += `
🗣️ DIALOGUE - PARTIE 1 (SYNCHRONISATION LABIALE PARFAITE) :
Elle dit : "${scriptText}"
AVEC SYNCHRONISATION LABIALE PARFAITE - ses lèvres bougent en même temps que sa voix.
On voit les muscles de son visage s'articuler, sa mâchoire bouger.
Ses lèvres ont des ridules, des reflets humides, une texture naturelle.
`;
        if (part2) dialogueText += `
🗣️ DIALOGUE - PARTIE 2 (SYNCHRONISATION LABIALE PARFAITE) :
Elle dit : "${scriptText}"
AVEC SYNCHRONISATION LABIALE PARFAITE - ses lèvres bougent en même temps que sa voix.
`;
        if (final) dialogueText += `
🗣️ DIALOGUE - FINALE (SYNCHRONISATION LABIALE PARFAITE) :
Elle dit : "${scriptText}"
`;
        return dialogueText;
    }

    // ===== COLLECTE DES DONNÉES =====
    collectUserData() {
        const selectedCard = document.querySelector('.character-card.selected');
        const countryKey = selectedCard ? selectedCard.dataset.country : 'spain';
        
        this.userData = {
            country: countryKey,
            leftPalmColor: document.getElementById('leftPalmColor').value,
            rightPalmColor: document.getElementById('rightPalmColor').value,
            leftPalmColorName: this.getColorName(document.getElementById('leftPalmColor').value),
            rightPalmColorName: this.getColorName(document.getElementById('rightPalmColor').value),
            startingOutfit: {
                top: document.getElementById('startingTop').value,
                bottom: document.getElementById('startingBottom').value,
                details: document.getElementById('startingDetails').value
            },
            finalOutfit: document.getElementById('finalOutfitDescription').value,
            naturalHair: document.getElementById('naturalHair')?.value || 'bruns',
            enableFluo: document.getElementById('enableFluo')?.checked || false,
            fluoColor: document.getElementById('fluoColor')?.value || 'rose fluo',
            fluoIntensity: document.getElementById('fluoIntensity')?.value || 9,
            hairStyle: document.getElementById('hairStyle')?.value || 'détachés',
            seductionLevel: document.getElementById('seductionLevel')?.value || 9,
            gestures: {
                regards: document.getElementById('gesteRegards')?.checked || false,
                sourires: document.getElementById('gesteSourires')?.checked || false,
                clins: document.getElementById('gesteClins')?.checked || false,
                levres: document.getElementById('gesteLevres')?.checked || false,
                bisous: document.getElementById('gesteBisous')?.checked || false,
                bisousCount: document.getElementById('bisousCount')?.value || 3,
                viens: document.getElementById('gesteViens')?.checked || false,
                viensCount: document.getElementById('viensCount')?.value || 4,
                mains: document.getElementById('gesteMains')?.checked || false,
                cheveux: document.getElementById('gesteCheveux')?.checked || false
            },
            effects: {
                confettis: document.getElementById('effectConfettis')?.checked || false,
                poudre: document.getElementById('effectPoudre')?.checked || false,
                petales: document.getElementById('effectPétales')?.checked || false,
                fumee: document.getElementById('effectFumee')?.checked || false,
                lumieres: document.getElementById('effectLumières')?.checked || false,
                paillettes: document.getElementById('effectPaillettes')?.checked || false
            },
            customDecor: {
                enabled: document.getElementById('enableCustomDecor')?.checked || false,
                text: document.getElementById('customDecorText')?.value || ''
            },
            finale: {
                bisou: document.getElementById('finalBisou')?.checked || false,
                ciao: document.getElementById('finalCiao')?.checked || false,
                masque: document.getElementById('finalMasque')?.checked || false,
                coeur: document.getElementById('finalCoeur')?.checked || false,
                clignement: document.getElementById('finalClignement')?.checked || false,
                cascade: document.getElementById('finalCascade')?.checked || false,
                revelation: document.getElementById('finalRevelation')?.checked || false,
                salut: document.getElementById('finalSalut')?.checked || false,
                regard: document.getElementById('finalRegard')?.checked || false,
                viens: document.getElementById('finalViens')?.checked || false,
                souffle: document.getElementById('finalSouffle')?.checked || false,
                epaule: document.getElementById('finalEpaule')?.checked || false,
                cheveux: document.getElementById('finalCheveux')?.checked || false,
                option: document.getElementById('finalOption')?.value || 'freeze',
                maintien: document.getElementById('finalMaintien')?.value || '2',
                emotion: document.getElementById('finalEmotion')?.value || 'satisfaite',
                interaction: document.getElementById('finalInteraction')?.value || 'regard'
            },
            animalBabyMode: {
                enabled: document.getElementById('enableAnimalBabyMode')?.checked || false,
                type: document.getElementById('animalBabyType')?.value || 'chiot',
                intensity: document.getElementById('animalBabyIntensity')?.value || 'tendre',
                positions: document.getElementById('animalBabyPositions')?.value || 'variees'
            },
            mirrorMode: {
                enabled: document.getElementById('enableMirrorMode')?.checked || false,
                type: document.getElementById('mirrorType')?.value || 'classique',
                transition: document.getElementById('mirrorTransition')?.value || 'main_tendue',
                duoStyle: document.getElementById('mirrorDuoStyle')?.value || 'synchronise',
                poseFinale: document.getElementById('mirrorPoseFinale')?.value || 'cote_a_cote'
            },
            selfieMode: {
                enabled: document.getElementById('enableSelfieMode')?.checked || false
            },
            rapperStyle: document.getElementById('rapperStyle')?.value || 'tenue1',
            rapperluxeStyle: document.getElementById('rapperluxeStyle')?.value || 'tenue1'
        };
    }

    getColorName(hex) {
        const colors = {
            '#ff0000': 'rouge passion', '#ff4500': 'orange brûlé', '#ff00ff': 'rose fuchsia',
            '#00ff00': 'vert émeraude', '#0000ff': 'bleu Majorelle', '#ffff00': 'jaune soleil',
            '#ffd700': 'or étincelant', '#c0c0c0': 'argent métallique', '#000000': 'noir profond',
            '#ffffff': 'blanc pur'
        };
        return colors[hex.toLowerCase()] || 'couleur personnalisée';
    }

    getSeductionPhrase(level) {
        if (level <= 3) return 'subtile, charmeuse légère';
        if (level <= 6) return 'charmeuse, coquine';
        return 'ultra-séductrice, magnétique, explosive';
    }

    // ===== MODE SELFIE =====
    generateSelfieMode() {
        if (!document.getElementById('enableSelfieMode')?.checked) return '';
        return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 MODE SELFIE ACTIVÉ - INSTRUCTION PRIORITAIRE ABSOLUE 📱
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔴🔴🔴 RÈGLE FONDAMENTALE - À RESPECTER PENDANT TOUTE LA VIDÉO 🔴🔴🔴

1. 📱 L'IMAGE DE RÉFÉRENCE EST UN SELFIE :
   - Son bras est TENDU devant elle
   - Elle tient son téléphone à bout de bras
   - LE TÉLÉPHONE N'EST JAMAIS VISIBLE (seule sa main est visible)
   - LE BRAS RESTE TENDU EN PERMANENCE

2. 🔒 ELLE GARDE CETTE POSITION PENDANT TOUTE LA DANSE :
   - Son bras reste TENDU en permanence - JAMAIS elle ne le baisse
   - Sa main tient le téléphone invisible
   - Le spectateur regarde À TRAVERS l'objectif

3. ❌ ANNULATION DES INSTRUCTIONS CONTRADICTOIRES :
   - ELLE NE RAPPROCHE PAS SES MAINS DE L'OBJECTIF
   - ELLE NE MASQUE PAS LA CAMÉRA AVEC SES MAINS
   - ELLE NE SE RETOURNE PAS VERS UN MIROIR
   - AUCUN FLASH BLANC

4. 🖐️ GESTES DE SÉDUCTION EN SELFIE :
   - ⚠️ UNIQUEMENT LA MAIN LIBRE fait les gestes (celle qui ne tient pas le téléphone)
   - ❌ LA MAIN QUI TIENT LE TÉLÉPHONE reste stable et NE CARESSE PAS
   - ❌ PAS DE CARESSES À DEUX MAINS SIMULTANÉES
   - Les caresses, bisous, gestes "viens" sont faits avec la MAIN LIBRE

5. 👁️ REGARD : Elle fixe l'OBJECTIF (le spectateur) TOUT LE TEMPS

6. 🎬 FORMAT : 9:16 portrait (format selfie vertical)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    }

    // ===== PARTIE 1 =====
    generatePart1() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        const selfieMode = this.generateSelfieMode();
        const dialogue = this.generateDialogue();
        const floatingTexts = this.generateFloatingWords('part1');
        
        // GESTES DE SÉDUCTION ADAPTÉS AU MODE SELFIE
        let gesturesText = '';
        const isSelfie = this.userData.selfieMode.enabled;
        
        if (isSelfie) {
            // Mode selfie : SEULEMENT LA MAIN LIBRE
            if (this.userData.gestures.regards) gesturesText += '- Elle fixe la caméra avec des regards intenses et charmeurs\n';
            if (this.userData.gestures.sourires) gesturesText += '- Sourires en coin, coquins, charmeurs\n';
            if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil complices et lents\n';
            if (this.userData.gestures.levres) gesturesText += '- Elle mord sa lèvre inférieure en vous fixant\n';
            if (this.userData.gestures.mains) gesturesText += '- Sa MAIN LIBRE (celle qui ne tient pas le téléphone) caresse son corps (cou, épaules, seins, hanches). La main qui tient le téléphone reste stable.\n';
            if (this.userData.gestures.cheveux) gesturesText += '- Avec sa MAIN LIBRE, elle joue avec ses cheveux, les caresse, les rejette\n';
            if (this.userData.gestures.bisous) {
                gesturesText += `- Elle envoie des baisers du bout des doigts vers la caméra avec sa MAIN LIBRE (${this.userData.gestures.bisousCount} fois)\n`;
            }
            if (this.userData.gestures.viens) {
                gesturesText += `- Elle fait le geste "viens vers moi" avec l'index de sa MAIN LIBRE (${this.userData.gestures.viensCount} fois)\n`;
            }
        } else {
            // Mode normal : les deux mains sont libres
            if (this.userData.gestures.regards) gesturesText += '- Elle fixe la caméra avec des regards intenses et charmeurs\n';
            if (this.userData.gestures.sourires) gesturesText += '- Sourires en coin, coquins, charmeurs\n';
            if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil complices et lents\n';
            if (this.userData.gestures.levres) gesturesText += '- Elle mord sa lèvre inférieure en vous fixant\n';
            if (this.userData.gestures.mains) gesturesText += '- Ses mains caressent son corps (cou, épaules, seins, hanches)\n';
            if (this.userData.gestures.cheveux) gesturesText += '- Jeux avec ses cheveux, elle les caresse, les rejette\n';
            if (this.userData.gestures.bisous) {
                gesturesText += `- Elle envoie des baisers du bout des doigts vers la caméra (${this.userData.gestures.bisousCount} fois)\n`;
            }
            if (this.userData.gestures.viens) {
                gesturesText += `- Elle fait le geste "viens vers moi" avec son index (${this.userData.gestures.viensCount} fois)\n`;
            }
        }

        const danceMovesText = (danceMoves && danceMoves[this.userData.country]?.part1) ? 
            danceMoves[this.userData.country].part1.join('\n    - ') : 'mouvements sensuels';

        let part1Text = `Une transition de danse synchronisée à haute énergie en 4k, basée sur l'image fournie - PREMIÈRE PARTIE de 6 secondes.

LE SUJET :
- Femme magnifique, totalement silencieuse - elle ne parle pas, elle danse uniquement
- Visage parfaitement identique à l'image de référence - traits reconnaissables, conservés avec précision

👇 INSTRUCTIONS POUR UN VISAGE HUMAIN AUTHENTIQUE - NIVEAU ULTRA-RÉALISTE MAXIMUM 👇

TEXTURE DE PEAU CINÉMATOGRAPHIQUE :
- Rendu hyper réaliste style photo professionnelle haute définition (PAS DE RENDU IA LISSE)
- Peau avec texture naturelle complexe : pores visibles à différentes échelles, relief cutané granuleux
- Sous-tons de peau multiples : zones plus rouges (joues, nez, oreilles), zones plus pâles (paupières)
- Transparence aux tempes : veines très légèrement visibles sous la peau
- La circulation sanguine donne des nuances changeantes selon l'éclairage

MICRO-EXPRESSIONS INVOLONTAIRES :
- Infime tressaillement de la paupière en battant des cils
- Pulsation sanguine très subtile visible aux tempes
- Légère dilatation des pupilles en fixant la caméra
- La peau s'étire et se comprime avec les expressions (pores qui se déforment)

YEUX ULTRA-RÉALISTES 8K AVEC VIE :
- Iris hyper détaillés avec motifs complexes uniques (comme une photo macro médicale)
- Film lacrymal humide recouvrant l'œil - les yeux ne sont JAMAIS secs
- Reflets humides qui bougent avec le regard
- Vaisseaux sanguins très fins visibles dans le blanc de l'œil
- Saccades oculaires : micro-mouvements involontaires (les yeux ne sont jamais totalement fixes)
- Pupilles qui réagissent à la lumière en temps réel
- Les deux yeux ont des motifs d'iris LÉGÈREMENT différents (asymétrie naturelle)
- Cils individuels, courbés naturellement, avec différentes longueurs et directions
- Au clignement, les cils s'entremêlent légèrement avant de se séparer

LÈVRES VIVANTES :
- Texture naturelle avec ridules verticales visibles
- La peau des lèvres est plus fine et légèrement translucide sur les bords
- Très légères craquelures naturelles (invisibles à l'œil nu mais perceptibles en texture)
- Reflets humides qui changent selon l'angle (salive naturelle)
- Léger brillant aux commissures quand elle ouvre la bouche
- La lèvre inférieure a une texture différente de la lèvre supérieure

DENTS NATURELLES (si sourire) :
- Dents légèrement jaunâtres (pas blanches artificielles)
- Petites imperfections naturelles : léger chevauchement, dent légèrement de travers
- Transparence au bord des dents quand éclairées
- Gencives avec texture naturelle (pas roses uniformes)
- Salive aux commissures quand elle sourit largement

RESPIRATION ET VIE :
- Très léger mouvement de la cage thoracique (même à l'arrêt)
- Les épaules bougent imperceptiblement avec la respiration
- Le ventre se soulève très légèrement
- La respiration influence la posture de façon infime

MAINS (si visibles) :
- Veines visibles sur le dos des mains
- Tendons qui bougent quand elle plie les doigts
- Plis des jointures marqués
- Petites cicatrices/imperfections naturelles sur les doigts
- La peau des mains est texturée différemment du visage
- Cuticules autour des ongles visibles

IMPERFECTIONS CONSERVÉES :
- Petits grains de beauté (qui bougent naturellement avec la peau)
- Rougeurs légères sur les joues et le nez
- Variations de teinte (pas de couleur uniforme)
- Poils de duvet très fins visibles sur les joues et contour du visage
- Asymétries naturelles conservées (pas de symétrie parfaite)
- Cernes très légers sous les yeux (naturels)

👁️ YEUX ULTRA-RÉALISTES 8K :
- Iris hyper détaillés avec motifs complexes (comme une photo macro)
- Vaisseaux sanguins très fins visibles dans le blanc de l'œil
- Reflets multiples dans les yeux (catchlights) nets et naturels
- Pupilles qui réagissent à la lumière
- Netteté maximale sur les yeux (point focal de l'image)

ÉCLAIRAGE CINÉMATOGRAPHIQUE NATUREL :
- Éclairage de type Rembrandt doux : triangle de lumière sur la joue
- Source principale à 45°, ombres naturelles qui sculptent les volumes
- Reflets naturels dans les yeux qui donnent de la vie au regard
- La lumière révèle la texture de la peau, ne la gomme pas

RENDU PHOTOGRAPHIQUE AUTHENTIQUE :
- Grain de film léger pour éviter l'aspect "plastique" des IA
- Pas de filtre beauté, pas de lissage excessif
- Le visage doit être indiscernable d'une vraie photo professionnelle
- Asymétries naturelles du visage conservées (pas de symétrie parfaite)

Expression ${seductionPhrase} : elle joue avec le spectateur, le captive, le séduit
Regards complices et coquins

${selfieMode}

${dialogue}

🖐️🖐️🖐️ MAINS PEINTES - VISIBLES PENDANT TOUTE LA PARTIE 1 🖐️🖐️🖐️
COULEURS ANNONÇATRICES (RESTENT VISIBLES EN PERMANENCE) :
- Paume GAUCHE : peinture ${this.userData.leftPalmColorName} (COULEUR RESTE VISIBLE)
- Paume DROITE : peinture ${this.userData.rightPalmColorName} (COULEUR RESTE VISIBLE)
- Poudre scintillante sur les doigts (VISIBLE À CHAQUE MOUVEMENT)
- Les deux couleurs restent parfaitement distinctes et ne se mélangent PAS
- ELLE GARDE SES MAINS VISIBLES PENDANT TOUTE LA DANSE
- Elle joue avec ses mains face caméra, les tourne, les admire - LES COULEURS RESTENT
- Ces deux couleurs annoncent les teintes dominantes de sa future tenue

⚠️ IMPORTANT - PENDANT TOUTE LA PARTIE 1 :
- LES COULEURS DES PAUMES SONT VISIBLES EN PERMANENCE
- JAMAIS les couleurs ne disparaissent ou ne s'effacent
- La peinture reste INTACTE et VIBRANTE du début à la fin
- Même quand elle danse, les paumes colorées sont TOUJOURS visibles

TENUE DE DÉPART (SERA COMPLÈTEMENT REMPLACÉE) :
- Haut : ${this.userData.startingOutfit.top}
- Bas : ${this.userData.startingOutfit.bottom}
- Détails : ${this.userData.startingOutfit.details}
- Cheveux dans leur couleur naturelle : ${this.userData.naturalHair}

DANSE AVANT TRANSFORMATION - MOUVEMENTS PRÉCIS :
La personne exécute une danse ${country.dance} sensuelle et ${seductionPhrase} :
    - ${danceMovesText}
    - Elle montre RÉGULIÈREMENT ses paumes colorées à la caméra
    - Les couleurs ${this.userData.leftPalmColorName} et ${this.userData.rightPalmColorName} sont TOUJOURS visibles

GESTES DE SÉDUCTION :
${gesturesText}
- Elle tend SES MAINS PEINTES vers la caméra pour bien montrer les couleurs
- Les paumes colorées restent VISIBLES dans tous ses gestes

JEUX DE REGARDS :
- Elle fixe la caméra droit dans les yeux
- Elle bat des cils lentement
- Elle suit les mouvements du spectateur
- Elle regarde de bas en haut sensuellement

${floatingTexts}`;

        // ===== TRANSITION =====
        if (this.userData.selfieMode.enabled) {
            part1Text += `

📱 TRANSITION SELFIE - BAISER À L'OBJECTIF (dernière seconde) :

⚠️ MODE SELFIE ACTIF : ELLE NE RAPPROCHE PAS SES MAINS DE L'OBJECTIF.
Elle tient son téléphone dans une main (invisible). Le bras reste TENDU.
Seule la MAIN LIBRE peut bouger.

ÉTAPE 1 (5.0s) : Elle approche son visage de l'objectif. Son regard est intense, ses lèvres s'avancent vers la caméra.
ÉTAPE 2 (5.3s) : Elle EMBRASSE L'OBJECTIF. Ses lèvres touchent la caméra. Ses yeux sont mi-clos, expression de désir.
ÉTAPE 3 (5.5s) : FLASH NOIR (très bref, 0.5 seconde) - l'écran devient noir instantanément.
ÉTAPE 4 (6.0s) : FIN PARTIE 1 - Écran noir.

⚠️ CONSIGNES ABSOLUES :
- C'EST UN SELFIE : son bras reste TENDU pendant tout le mouvement
- Le téléphone est INVISIBLE (seule sa main est visible)
- Le baiser est RÉEL : ses lèvres touchent l'objectif
- Le flash noir est INSTANTANÉ
- AUCUN MOUVEMENT DE MAINS POUR CACHER L'OBJECTIF

IMPORTANT - PRÉPARATION POUR LA PARTIE 2 :
- Pendant ce flash noir, elle a le temps de SE CHANGER COMPLÈTEMENT
- Sa nouvelle tenue est DÉJÀ PORTÉE
- La PARTIE 2 commencera avec le résultat FINAL déjà visible, TOUJOURS EN SELFIE
`;
        } 
        else if (this.userData.mirrorMode.enabled) {
            part1Text += `

🪞 TRANSITION MIROIR DIRECTE (dernière seconde) :

ÉTAPE 1 (5.0s) : Elle se RETOURNE vers le miroir (mouvement lent)
ÉTAPE 2 (5.3s) : Elle POSE SA MAIN À PLAT sur le miroir
ÉTAPE 3 (5.5s) : FLASH DE LUMIÈRE BLANCHE (très bref, 0.5 seconde)
ÉTAPE 4 (6.0s) : FIN PARTIE 1 - Écran blanc

IMPORTANT - PRÉPARATION POUR LA PARTIE 2 :
- Pendant ce flash blanc, elle se change et son clone apparaît
- La PARTIE 2 commencera avec le résultat FINAL déjà visible`;
        } 
        else {
            part1Text += `

TRANSITION STANDARD :
Au moment le plus intense de sa danse, elle rapproche ses mains peintes de l'objectif dans un geste théâtral et sensuel, les plaquant contre la caméra pour masquer entièrement l'image, cachant complètement la vue pendant la fin de cette première partie.

IMPORTANT - PRÉPARATION POUR LA PARTIE 2 :
- Pendant que les mains cachent l'objectif, elle se change COMPLÈTEMENT
- La PARTIE 2 commencera avec le résultat FINAL déjà visible`;
        }

        return part1Text;
    }

    // ===== MODE BÉBÉ ANIMAL CÂLIN =====
    generateAnimalBabyMode() {
        if (!document.getElementById('enableAnimalBabyMode')?.checked) return '';
        const animalType = document.getElementById('animalBabyType')?.value || 'chiot';
        const intensity = document.getElementById('animalBabyIntensity')?.value || 'tendre';
        const positions = document.getElementById('animalBabyPositions')?.value || 'variees';
        const animal = window.animalBabyData?.types[animalType] || window.animalBabyData?.types.chiot;
        
        let babyText = '\n\n🐶 MODE BÉBÉ ANIMAL CÂLIN - INTERACTION ULTRA-RÉALISTE 🐱\n';
        babyText += `\n👶 ANIMAL PRÉSENT : ${animal ? animal.name : (animalType === 'chiot' ? '🐶 Chiot' : '🐱 Chaton')}\n`;
        babyText += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 INSTRUCTION PRIORITAIRE - INTÉGRATION DE L'IMAGE ANIMALE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- L'image du bébé animal est INTÉGRÉE PHYSIQUEMENT dans la scène
- Elle le tient DANS SES MAINS, contre son corps
- L'animal est RÉEL : volume, poids, textures

🖼️ PLAN CADRAGE : PLAN MOYEN RAPPROCHÉ
- L'animal est tenu DROIT DEVANT ELLE, au niveau des seins
- VISIBLE FACE CAMÉRA : elle et l'animal regardent le spectateur

💞 INTERACTIONS :
- Câlins, bisous sur le front, gratouilles
- Alternance regards TENDRES (animal) / SÉDUCTEURS (caméra)

🐾 COMPORTEMENT DE L'ANIMAL :
${animalType === 'chiot' ? 
  `- remue la queue frénétiquement
- lèche son visage avec sa petite langue
- se blottit contre sa poitrine` : 
  `- ronronne fort contre elle
- frotte sa tête contre son cou
- se love dans le creux de ses bras`}

⏱️ CHRONOLOGIE (6 secondes) :
- 0-1s : Révélation - elle tient DÉJÀ l'animal
- 1-2s : Présentation face caméra
- 2-3s : Câlins, joue contre sa tête
- 3-4s : Danse DOUCE avec lui
- 4-5s : Bisous et jeux
- 5-6s : FINALE - dernier câlin, regard caméra, FREEZE

${intensity === 'tendre' ? '🎯 INTENSITÉ : TENDRE' : intensity === 'joueur' ? '🎯 INTENSITÉ : JOUEUR' : '🎯 INTENSITÉ : MIXTE'}
${positions === 'variees' ? '📍 POSITIONS : VARIÉES' : positions === 'fixe' ? '📍 POSITIONS : FIXE' : '📍 POSITIONS : DYNAMIQUES'}
`;
        return babyText;
    }

    // ===== MODE MIROIR =====
    generateMirrorMode() {
        if (!document.getElementById('enableMirrorMode')?.checked) return '';
        const mirrorType = document.getElementById('mirrorType')?.value || 'classique';
        const duoStyle = document.getElementById('mirrorDuoStyle')?.value || 'synchronise';
        const poseFinale = document.getElementById('mirrorPoseFinale')?.value || 'cote_a_cote';
        const mirrorData = window.mirrorModeData || {};
        const type = mirrorData.types?.[mirrorType] || { name: "Clone identique", description: "" };
        const duo = mirrorData.duo_styles?.[duoStyle] || { name: "Synchronisé", description: "" };
        
        let mirrorText = '\n\n🪞 MODE MIROIR - DOUBLE SENSUEL 🪞\n';
        mirrorText += `\n🎭 TYPE DE CLONE : ${type.name}\n`;
        
        if (mirrorData.regle_absolue) {
            mirrorText += `
🚫 RÈGLE ABSOLUE - AUCUN BAISER ENTRE LES CLONES 🚫
${mirrorData.regle_absolue.consigne}
✅ CONTACTS AUTORISÉS : ${mirrorData.regle_absolue.contacts_autorises.join(', ')}
`;
        }
        
        mirrorText += `
✨ PARTIE 2 - LE DUO FACE CAMÉRA (6 secondes) :

SECONDE 0-1 : Les DEUX femmes côte à côte, FACE CAMÉRA
SECONDE 1-2 : PRÉSENTATION - se regardent, sourient, se prennent la main
SECONDE 2-4 : DANSE À DEUX - style ${duo.name}
SECONDE 4-5 : MONTÉE DE TENSION - se rapprochent
SECONDE 5-6 : FINALE - ${poseFinale === 'cote_a_cote' ? 'côte à côte, main dans la main' : 'pose choisie'}

💡 RAPPELS : Les DEUX femmes sont IDENTIQUES, transition pendant le flash blanc
`;
        return mirrorText;
    }

    // ===== MODES FANTASTIQUES =====
    generateFantasyTransformations() {
        if (typeof window.generateFantasyTransformations === 'function') {
            return window.generateFantasyTransformations();
        }
        return '';
    }

    // ===== PARTIE 2 =====
    generatePart2() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        const fluoIntensityText = this.userData.fluoIntensity >= 8 ? 'éclatant, quasi phosphorescent' :
                                 this.userData.fluoIntensity >= 5 ? 'brillant' : 'léger';
        
        // GESTES DE SÉDUCTION ADAPTÉS AU MODE SELFIE
        let gesturesText = '';
        const isSelfie = this.userData.selfieMode.enabled;
        
        if (isSelfie) {
            if (this.userData.gestures.regards) gesturesText += '- Regards encore plus intenses, magnétiques\n';
            if (this.userData.gestures.sourires) gesturesText += '- Sourires encore plus charmeurs\n';
            if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil appuyés\n';
            if (this.userData.gestures.levres) gesturesText += '- Mordillement de la lèvre plus prononcé\n';
            if (this.userData.gestures.mains) gesturesText += '- Sa MAIN LIBRE caresse son corps (cou, épaules, seins, hanches)\n';
            if (this.userData.gestures.cheveux) gesturesText += '- Avec sa MAIN LIBRE, jeux accentués avec ses cheveux fluo\n';
            if (this.userData.gestures.bisous) gesturesText += `- Elle envoie ${this.userData.gestures.bisousCount} baisers avec sa MAIN LIBRE\n`;
            if (this.userData.gestures.viens) gesturesText += `- Elle fait le geste "viens" ${this.userData.gestures.viensCount} fois avec sa MAIN LIBRE\n`;
        } else {
            if (this.userData.gestures.regards) gesturesText += '- Regards encore plus intenses, magnétiques\n';
            if (this.userData.gestures.sourires) gesturesText += '- Sourires encore plus charmeurs\n';
            if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil appuyés\n';
            if (this.userData.gestures.levres) gesturesText += '- Mordillement de la lèvre plus prononcé\n';
            if (this.userData.gestures.mains) gesturesText += '- Caresses plus appuyées sur tout le corps\n';
            if (this.userData.gestures.cheveux) gesturesText += '- Jeux accentués avec ses cheveux fluo\n';
            if (this.userData.gestures.bisous) gesturesText += `- Elle envoie ${this.userData.gestures.bisousCount} baisers\n`;
            if (this.userData.gestures.viens) gesturesText += `- Elle fait le geste "viens" ${this.userData.gestures.viensCount} fois\n`;
        }

        const animalBabyDanceInstructions = this.userData.animalBabyMode.enabled ? 
            `- Danse ADAPTÉE : mouvements PLUS DOUX, PLUS LENTS\n` : '';
        const danceMovesText = (danceMoves && danceMoves[this.userData.country]?.part2) ? 
            danceMoves[this.userData.country].part2.join('\n    - ') : 'mouvements encore plus intenses';
        const actionType = this.getActionType(this.userData.country);
        const decorText = this.getUnifiedDecor();
        const actionAleatoire = this.getRandomAction(actionType);
        const finale = this.getFinaleGesture();
        const finalOption = this.getFinalOption();
        const publicInteraction = this.getPublicInteraction();
        const floatingTexts = this.generateFloatingWords('part2');
        
        const alienTransformations = this.generateAlienTransformations();
        const avatarTransformations = this.generateAvatarTransformations();
        const animalTransformations = this.generateAnimalTransformations();
        const animalBabyMode = this.generateAnimalBabyMode();
        const mirrorMode = this.generateMirrorMode();
        const selfieMode = this.generateSelfieMode();
        const fantasyModes = this.generateFantasyTransformations();
        const specialFeatures = this.generateSpecialFeatures();
        const dialogue = this.generateDialogue();
        const advancedEffects = this.generateAdvancedEffects();
        const script = this.generateScript();

        const baseEffects = [];
        if (document.getElementById('effectConfettis')?.checked) baseEffects.push('confettis');
        if (document.getElementById('effectPoudre')?.checked) baseEffects.push('poudre scintillante');
        if (document.getElementById('effectPétales')?.checked) baseEffects.push('pluie de pétales');
        if (document.getElementById('effectFumee')?.checked) baseEffects.push('fumée légère');
        if (document.getElementById('effectLumières')?.checked) baseEffects.push('lumières colorées');
        if (document.getElementById('effectPaillettes')?.checked) baseEffects.push('paillettes');
        const baseEffectsText = baseEffects.length > 0 ? baseEffects.join(', ') : 'poudre scintillante';

        const avatarMode = document.getElementById('enableAvatarMode')?.checked || false;
        const keepFace = document.getElementById('avatarKeepFace')?.checked || false;

        let priorityReinforcement = '';
        let hasPriorityEyes = false;
        let hasPrioritySkin = false;
        if (specialFeatures.includes('YEUX')) hasPriorityEyes = true;
        if (specialFeatures.includes('TACHES')) hasPrioritySkin = true;

        let faceInstructions = '';
        let eyesInstructions = '';

        if (avatarMode && !keepFace) {
            faceInstructions = `👇 INSTRUCTIONS POUR UN VISAGE AVATAR COMPLET 👇
- Transformation COMPLète en Na'vi
- Peau bleue caractéristique (${document.getElementById('avatarSkinTone')?.value || 'bleu nuit'})
- Traits faciaux Na'vi : nez large, arcades sourcilières prononcées
- Oreilles pointues`;
            eyesInstructions = `👁️ YEUX AVATAR : Iris jaune/or, pupilles verticales, reflets lumineux`;
        } else {
            faceInstructions = `👇 INSTRUCTIONS POUR UN VISAGE HUMAIN AUTHENTIQUE 👇
- Rendu hyper réaliste style photo professionnelle
- Peau avec texture naturelle : pores visibles, relief cutané
- Micro-expressions involontaires, respiration visible
- Le visage doit être STRICTEMENT IDENTIQUE à l'image de référence`;
            eyesInstructions = `👁️ YEUX : Iris hyper détaillés, film lacrymal humide, vaisseaux sanguins visibles, saccades oculaires, cils individuels`;
        }

        const detailsMicroscopiques = `DÉTAILS MICROSCOPIQUES :
- Peau autour des yeux fine et translucide
- Paupières avec plis naturels
- Nez avec pores larges
- Oreilles avec cartilage et duvet
- Cou avec plis naturels`;

        let outfitText = this.userData.finalOutfit;
        if (this.userData.country === 'rapper' && countries.rapper && countries.rapper.tenues) {
            const style = this.userData.rapperStyle;
            const tenue = countries.rapper.tenues[style];
            if (tenue) outfitText = `${tenue.description} aux couleurs ${tenue.colors.join(' et ')}. Éléments : ${tenue.elements.join(', ')}. Accessoires : ${tenue.accessories.join(', ')}.`;
        }
        if (this.userData.country === 'rapperluxe' && countries.rapperluxe && countries.rapperluxe.tenues) {
            const style = this.userData.rapperluxeStyle;
            const tenue = countries.rapperluxe.tenues[style];
            if (tenue) outfitText = `${tenue.description} aux couleurs ${tenue.colors.join(' et ')}. Éléments : ${tenue.elements.join(', ')}. Accessoires : ${tenue.accessories.join(', ')}.`;
        }

        return `Suite de la transition - DEUXIÈME PARTIE de 6 secondes.

CONTINUITÉ PARFAITE DU VISAGE :
- Le sujet est STRICTEMENT IDENTIQUE à celui de la PARTIE 1
- MÊMES TRAITS, MÊME VISAGE, expression encore plus intense

${priorityReinforcement}

${selfieMode}

${dialogue}

${faceInstructions}

${eyesInstructions}

${detailsMicroscopiques}

ÉCLAIRAGE CINÉMATOGRAPHIQUE NATUREL :
- Éclairage Rembrandt doux
- Source principale à 45°, ombres naturelles
- Reflets naturels dans les yeux

RENDU PHOTOGRAPHIQUE AUTHENTIQUE :
- Grain de film léger
- Pas de filtre beauté, pas de lissage excessif
${!avatarMode || keepFace ? `- Visage indiscernable d'une vraie photo professionnelle` : `- Rendu cohérent Na'vi`}

⚠️ TRANSITION NATURELLE :
- Pendant le flash noir/blanc, elle s'est CHANGÉE COMPLÈTEMENT
- La transformation a eu lieu HORS CAMÉRA
- AUCUN changement visible pendant cette PARTIE 2

${script}

GESTES DE SÉDUCTION IMMÉDIATS :
${this.userData.gestures.bisous ? '- Elle envoie UN BISOUD À LA CAMÉRA' : ''}
${this.userData.gestures.viens ? '- Elle fait le geste "VIENS VERS MOI"' : ''}
- Sourire victorieux

NOUVELLE TENUE (DÉJÀ PORTÉE) :
${outfitText}

CHEVEUX TRANSFORMÉS :
${this.userData.enableFluo ? 
`- Cheveux DÉJÀ colorés en ${this.userData.fluoColor} ${fluoIntensityText}
- Style : ${this.userData.hairStyle}
- Cascade de couleur fluo qui scintille` : 
`- Cheveux conservent leur couleur naturelle (${this.userData.naturalHair})`}

${alienTransformations}
${avatarTransformations}
${animalTransformations}
${animalBabyMode}
${mirrorMode}
${fantasyModes}
${!hasPriorityEyes && !hasPrioritySkin ? specialFeatures : ''}

MAQUILLAGE APPLIQUÉ (DÉJÀ FAIT) :
- Teint parfait et lumineux
- Yeux intensifiés
- Lèvres brillantes
- Paillettes subtiles
- Peau légèrement huilée

DANSE APRÈS TRANSFORMATION :
Elle reprend sa danse ${country.dance} avec une énergie décuplée :
    ${animalBabyDanceInstructions}
    - ${danceMovesText}

⚡ ACTION SPÉCIALE ⚡
- ${actionAleatoire}

JEUX DE SÉDUCTION ACCRUS :
${gesturesText}

JEUX AVEC LA TENUE ET CHEVEUX :
- Jeux avec les éléments de la tenue
- Elle passe ses mains dans ses cheveux fluo
- Les fait virevolter en tournant

${floatingTexts}

ARRIÈRE-PLAN - DÉCOR UNIFIÉ :
${decorText}

${advancedEffects}

EFFETS SPECTACULAIRES DE BASE :
Au moment où ses mains révèlent la transformation, explosion de ${baseEffectsText}

🎬 FINALE SPECTACULAIRE :

⏱️ CHRONOLOGIE :
- SECONDES 1 à 5 : Danse intense
- SECONDE 5 à 6 : ${finale}

🎯 INTERACTION DIRECTE :
- ${publicInteraction}
- Elle danse POUR le spectateur

📸 MAINTIEN DE POSE (${document.getElementById('finalMaintien')?.value || '2'}s) :
- Corps figé mais VISAGE VIVANT
- Yeux parcourent l'écran
- Respiration AMPLE
- Sourire ${document.getElementById('finalEmotion')?.value || 'satisfaite'}

CAMÉRA ET ÉCLAIRAGE :
- Caméra statique
- Éclairage cinématographique chaleureux
- Spot sur elle pendant le finale

RAPPEL ULTIME :
- Transformation DÉJÀ TERMINÉE
- AUCUNE métamorphose visible
- Le réalisme est ABSOLUMENT CRUCIAL
- La FINALE doit être PARFAITE`;
    }

    generateConsignes() {
        const country = countries[this.userData.country];
        const avatarMode = document.getElementById('enableAvatarMode')?.checked || false;
        const keepFace = document.getElementById('avatarKeepFace')?.checked || false;
        const eyesDiff = document.getElementById('enable-eyes')?.checked || false;
        const skinDiff = document.getElementById('enable-skin')?.checked || false;
        const animalMode = document.getElementById('enableAnimalMode')?.checked || false;
        const animalBabyMode = document.getElementById('enableAnimalBabyMode')?.checked || false;
        const mirrorMode = document.getElementById('enableMirrorMode')?.checked || false;
        const selfieMode = document.getElementById('enableSelfieMode')?.checked || false;
        
        let avatarLine = '';
        if (avatarMode) avatarLine = keepFace ? '\n15. MODE AVATAR : visage humain conservé' : '\n15. MODE AVATAR : transformation complète';
        let animalLine = animalMode ? '\n16. MODE ANIMAL ACTIVÉ' : '';
        let animalBabyLine = animalBabyMode ? '\n17. MODE BÉBÉ ANIMAL CÂLIN - finale spéciale' : '';
        let mirrorLine = mirrorMode ? '\n18. MODE MIROIR - transition flash blanc' : '';
        let selfieLine = selfieMode ? '\n19. 📱 MODE SELFIE - bras TENDU, téléphone INVISIBLE, transition BAISER + FLASH NOIR, UNIQUEMENT MAIN LIBRE pour les gestes' : '';
        let specialLine = '';
        if (eyesDiff && skinDiff) specialLine = '\n20. OPTIONS SPÉCIALES 8K : Yeux hétérochromie + Taches de naissance';
        else if (eyesDiff) specialLine = '\n20. OPTIONS SPÉCIALES 8K : Yeux hétérochromie';
        else if (skinDiff) specialLine = '\n20. OPTIONS SPÉCIALES 8K : Taches de naissance';
        
        return `CONSIGNES DE COHÉRENCE ABSOLUE :

1. VISAGE IDENTIQUE : PARTIE 2 = PARTIE 1
2. TRANSITION NATURELLE : Transformation HORS CAMÉRA
3. RENDU ULTRA-RÉALISTE : Pores, grains de beauté, micro-expressions
4. YEUX 8K : Iris détaillés, film lacrymal, vaisseaux
5. SILENCE TOTAL : Pas un mot (sauf script activé)
6. SÉDUCTION MAGNÉTIQUE
7. GESTES DIRECTS : ${this.userData.gestures.bisous ? 'BISOUS' : ''} ${this.userData.gestures.viens ? 'et VIENS' : ''}
8. TENUE DÉPART REMPLACÉE
9. CHEVEUX ${this.userData.enableFluo ? 'FLUO' : 'NATURELS'}
10. COULEURS ANNONÇATRICES : ${this.userData.leftPalmColorName} et ${this.userData.rightPalmColorName}
11. MOUVEMENTS PRÉCIS
12. INSPIRATION : ${country.name} - ${country.dance}
13. TRANSFORMATION DÉJÀ ACCOMPLIE
14. FINALE SPECTACULAIRE${avatarLine}${animalLine}${animalBabyLine}${mirrorLine}${selfieLine}${specialLine}`;
    }

    generateFullPrompt() {
        this.collectUserData();
        return {
            part1: this.generatePart1(),
            part2: this.generatePart2(),
            consignes: this.generateConsignes(),
            full: this.generatePart1() + '\n\n' + this.generatePart2() + '\n\n' + this.generateConsignes()
        };
    }
}

// ==================== FONCTIONS D'INITIALISATION ====================

function initCharacters() {
    console.log("🎭 Initialisation des personnages...");
    const grid = document.getElementById('countryGrid');
    if (!grid) { console.error("❌ Grille non trouvée!"); return; }
    if (typeof countries === 'undefined') { grid.innerHTML = '<div style="color: red;">Erreur: Personnages non chargés</div>'; return; }
    let html = '';
    for (const [key, country] of Object.entries(countries)) {
        html += `<div class="character-card" data-country="${key}">${country.name}</div>`;
    }
    grid.innerHTML = html;
    console.log(`✅ ${Object.keys(countries).length} personnages chargés`);
    const firstCard = document.querySelector('.character-card');
    if (firstCard) {
        firstCard.classList.add('selected');
        const selectedSpan = document.querySelector('#selectedCountry span');
        if (selectedSpan) selectedSpan.textContent = countries[firstCard.dataset.country].name;
    }
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            const selectedSpan = document.querySelector('#selectedCountry span');
            if (selectedSpan) selectedSpan.textContent = countries[this.dataset.country].name;
        });
    });
    const searchInput = document.getElementById('characterSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const search = e.target.value.toLowerCase();
            document.querySelectorAll('.character-card').forEach(card => {
                card.style.display = card.textContent.toLowerCase().includes(search) ? 'block' : 'none';
            });
        });
    }
}

function initImageUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const removeBtn = document.getElementById('removeImage');
    if (!uploadArea || !imageInput || !imagePreview || !previewImg || !removeBtn) return;
    uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.style.borderColor = '#00f3ff'; });
    uploadArea.addEventListener('dragleave', () => { uploadArea.style.borderColor = ''; });
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) handleImage(file);
    });
    imageInput.addEventListener('change', (e) => { if (e.target.files[0]) handleImage(e.target.files[0]); });
    removeBtn.addEventListener('click', () => {
        imagePreview.style.display = 'none';
        uploadArea.style.display = 'flex';
        imageInput.value = '';
        previewImg.src = '#';
    });
    function handleImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImg.src = e.target.result;
            imagePreview.style.display = 'block';
            uploadArea.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

function displayPrompt(prompts, tabId) {
    const display = document.getElementById('promptDisplay');
    if (!display) return;
    let text = '';
    switch(tabId) {
        case 'tabFull': text = prompts.full || ''; break;
        case 'tabPart1': text = prompts.part1 || ''; break;
        case 'tabPart2': text = prompts.part2 || ''; break;
        case 'tabConsignes': text = prompts.consignes || ''; break;
    }
    display.innerHTML = text.replace(/\n/g, '<br>');
}

function updateRecap() {
    const selected = document.querySelector('.character-card.selected');
    if (!selected) return;
    const country = countries[selected.dataset.country];
    const fluoActive = document.getElementById('enableFluo')?.checked ? 'OUI' : 'NON';
    const alienActive = document.getElementById('enableAlienMode')?.checked ? '👽' : '';
    const avatarActive = document.getElementById('enableAvatarMode')?.checked ? '🔵' : '';
    const keepFace = document.getElementById('avatarKeepFace')?.checked ? '👤' : '';
    const animalActive = document.getElementById('enableAnimalMode')?.checked ? '🐾' : '';
    const animalBabyActive = document.getElementById('enableAnimalBabyMode')?.checked ? '🐶' : '';
    const mirrorActive = document.getElementById('enableMirrorMode')?.checked ? '🪞' : '';
    const selfieActive = document.getElementById('enableSelfieMode')?.checked ? '📱' : '';
    const eyesActive = document.getElementById('enable-eyes')?.checked ? '👁️' : '';
    const skinActive = document.getElementById('enable-skin')?.checked ? '🎨' : '';
    const recap = `🌍 Personnage : ${country.name}\n💃 Danse : ${country.dance}\n💇 Cheveux fluo : ${fluoActive} ${alienActive} ${avatarActive} ${keepFace} ${animalActive} ${animalBabyActive} ${mirrorActive} ${selfieActive} ${eyesActive} ${skinActive}`;
    const recapDiv = document.getElementById('recapContent');
    if (recapDiv) recapDiv.innerHTML = recap.replace(/\n/g, '<br>');
}

function setupConditionalOptions() {
    const alienSkin = document.getElementById('alienSkin');
    const alienEyes = document.getElementById('alienEyes');
    const alienAntenna = document.getElementById('alienAntenna');
    const alienGlow = document.getElementById('alienGlow');
    const alienTattoos = document.getElementById('alienTattoos');
    const alienHolograms = document.getElementById('alienHolograms');
    if (alienSkin) alienSkin.addEventListener('change', function() { document.getElementById('alienSkinOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienEyes) alienEyes.addEventListener('change', function() { document.getElementById('alienEyesOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienAntenna) alienAntenna.addEventListener('change', function() { document.getElementById('alienAntennaOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienGlow) alienGlow.addEventListener('change', function() { document.getElementById('alienGlowOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienTattoos) alienTattoos.addEventListener('change', function() { document.getElementById('alienTattoosOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienHolograms) alienHolograms.addEventListener('change', function() { document.getElementById('alienHologramsOptions').style.display = this.checked ? 'block' : 'none'; });
    
    const avatarTail = document.getElementById('avatarTail');
    const avatarStripes = document.getElementById('avatarStripes');
    if (avatarTail) avatarTail.addEventListener('change', function() { document.getElementById('avatarTailOptions').style.display = this.checked ? 'block' : 'none'; });
    if (avatarStripes) avatarStripes.addEventListener('change', function() { document.getElementById('avatarStripesOptions').style.display = this.checked ? 'block' : 'none'; });
    
    const avatarKeepFace = document.getElementById('avatarKeepFace');
    const avatarFullBody = document.getElementById('avatarFullBody');
    if (avatarKeepFace && avatarFullBody) avatarKeepFace.addEventListener('change', function() { if (this.checked && !avatarFullBody.checked) avatarFullBody.checked = true; });
    
    document.getElementById('enableAnimalMode')?.addEventListener('change', updateAnimalColors);
    document.getElementById('animalType')?.addEventListener('change', updateAnimalColors);
    document.getElementById('enable-eyes')?.addEventListener('change', function() { document.getElementById('eye-controls').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enable-skin')?.addEventListener('change', function() { document.getElementById('skin-controls').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableSelfieMode')?.addEventListener('change', function() { document.getElementById('selfieOptions').style.display = this.checked ? 'block' : 'none'; });
}

function updateAnimalColors() {
    const type = document.getElementById('animalType')?.value;
    const colorSelect = document.getElementById('animalColor');
    if (!colorSelect || !type || !window.animalData) return;
    const animal = window.animalData[type];
    if (!animal) return;
    colorSelect.innerHTML = '';
    animal.couleursDisponibles.forEach(couleur => {
        const option = document.createElement('option');
        option.value = couleur;
        option.textContent = couleur.charAt(0).toUpperCase() + couleur.slice(1);
        colorSelect.appendChild(option);
    });
}

function attachEvents() {
    console.log("🔗 Attachement des événements...");
    const generator = new PromptGenerator();
    
    document.getElementById('generatePrompt')?.addEventListener('click', function() {
        console.log("🎬 Génération du prompt...");
        const prompts = generator.generateFullPrompt();
        window.lastPrompts = prompts;
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) displayPrompt(prompts, activeTab.id);
        updateRecap();
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const prompts = window.lastPrompts || { full: '', part1: '', part2: '', consignes: '' };
            displayPrompt(prompts, this.id);
        });
    });
    
    document.getElementById('copyPrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        navigator.clipboard.writeText(text).then(() => alert('✅ Prompt copié!'));
    });
    document.getElementById('exportPrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'prompt_transition.txt';
        a.click();
        URL.revokeObjectURL(url);
    });
    document.getElementById('translatePrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        window.open(`https://translate.google.com/?sl=fr&tl=en&text=${encodeURIComponent(text)}&op=translate`, '_blank');
    });
    document.getElementById('clearPrompt')?.addEventListener('click', function() {
        document.getElementById('promptDisplay').innerHTML = '';
        window.lastPrompts = null;
    });
    document.getElementById('suggestColors')?.addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) { alert('Sélectionnez d\'abord un personnage'); return; }
        const country = countries[selected.dataset.country];
        document.getElementById('leftPalmColor').value = country.palmColors.left;
        document.getElementById('rightPalmColor').value = country.palmColors.right;
    });
    document.getElementById('generateOutfit')?.addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) { alert('Sélectionnez d\'abord un personnage'); return; }
        const country = countries[selected.dataset.country];
        let outfitDesc = `${country.finalOutfit.description} aux couleurs ${country.finalOutfit.colors.join(' et ')}. Éléments : ${country.finalOutfit.elements.join(', ')}. Accessoires : ${country.finalOutfit.accessories.join(', ')}.`;
        document.getElementById('finalOutfitDescription').value = outfitDesc;
    });
    
    document.getElementById('enableMagicTexts')?.addEventListener('change', function() { document.getElementById('magicTextsOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableCustomDecor')?.addEventListener('change', function() { document.getElementById('customDecorOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAlienMode')?.addEventListener('change', function() { document.getElementById('alienOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAvatarMode')?.addEventListener('change', function() { document.getElementById('avatarOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAnimalMode')?.addEventListener('change', function() { document.getElementById('animalOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAnimalBabyMode')?.addEventListener('change', function() { document.getElementById('animalBabyOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableMirrorMode')?.addEventListener('change', function() { document.getElementById('mirrorOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableSelfieMode')?.addEventListener('change', function() { document.getElementById('selfieOptions').style.display = this.checked ? 'block' : 'none'; });
    if (typeof initFantasyConfig === 'function') initFantasyConfig();
    document.getElementById('enableScript')?.addEventListener('change', function() { document.getElementById('scriptOptions').style.display = this.checked ? 'block' : 'none'; });
    
    setupConditionalOptions();
    
    const fluoIntensity = document.getElementById('fluoIntensity');
    if (fluoIntensity) fluoIntensity.addEventListener('input', function() {
        const val = parseInt(this.value);
        const labels = ['Faible', 'Léger', 'Moyen', 'Brillant', 'Éclatant', 'Intense', 'Fulgurant', 'Phosphorescent', 'Néon', 'AVEUGLANT'];
        document.getElementById('intensityValue').textContent = labels[val-1] || 'Éclatant';
    });
    
    const seductionLevel = document.getElementById('seductionLevel');
    const seductionValue = document.getElementById('seductionValue');
    if (seductionLevel && seductionValue) seductionLevel.addEventListener('input', function() { seductionValue.textContent = this.value + '/10'; });
    
    const bisousCheckbox = document.getElementById('gesteBisous');
    const bisousCount = document.getElementById('bisousCount');
    if (bisousCheckbox && bisousCount) {
        bisousCount.disabled = !bisousCheckbox.checked;
        bisousCheckbox.addEventListener('change', function() { bisousCount.disabled = !this.checked; });
    }
    const viensCheckbox = document.getElementById('gesteViens');
    const viensCount = document.getElementById('viensCount');
    if (viensCheckbox && viensCount) {
        viensCount.disabled = !viensCheckbox.checked;
        viensCheckbox.addEventListener('change', function() { viensCount.disabled = !this.checked; });
    }
}

function populateSpecialSelects() {
    const eyeLeft = document.getElementById('eye-left-select');
    const eyeRight = document.getElementById('eye-right-select');
    if (eyeLeft && eyeRight && typeof eyeColorsData !== 'undefined') {
        eyeLeft.innerHTML = '';
        eyeRight.innerHTML = '';
        eyeColorsData.forEach(color => {
            const option1 = document.createElement('option');
            option1.value = color.label.toLowerCase();
            option1.textContent = color.label;
            eyeLeft.appendChild(option1);
            const option2 = document.createElement('option');
            option2.value = color.label.toLowerCase();
            option2.textContent = color.label;
            eyeRight.appendChild(option2);
        });
    }
    const skinSelect = document.getElementById('skin-color-select');
    if (skinSelect && typeof skinColorsData !== 'undefined') {
        skinSelect.innerHTML = '';
        skinColorsData.forEach(color => {
            const option = document.createElement('option');
            option.value = color.label.toLowerCase();
            option.textContent = color.label;
            skinSelect.appendChild(option);
        });
    }
}

function startApp() {
    console.log("🚀 Démarrage de l'application...");
    populateSpecialSelects();
    setTimeout(updateAnimalColors, 500);
    initCharacters();
    initImageUpload();
    attachEvents();
    console.log("✅ Application prête!");
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}

window.PromptGenerator = PromptGenerator;
window.initCharacters = initCharacters;
window.displayPrompt = displayPrompt;
window.updateRecap = updateRecap;

console.log("📦 script.js chargé - MODE SELFIE : bras TENDU, téléphone INVISIBLE, transition BAISER + FLASH NOIR, UNIQUEMENT MAIN LIBRE pour les gestes, ANNULATION des caresses à deux mains");

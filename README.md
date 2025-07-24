
<p align="center">
  <img src="assets/cyber-train-hacking-cagouler.png" alt="cyber-train-hacking-cagouler" width="400"/>
</p>

# 🔍 VoidScan — Port scanner minimaliste et furtif

## Sommaire
- [VoidScan — Port scanner minimaliste et furtif](#-voidscan--port-scanner-minimaliste-et-furtif)
- [🧰 Fonctionnalités principales](#-fonctionnalités-principales)
- [⚙️ Installation rapide](#️-installation-rapide)
- [🚀 Exemples d'utilisation](#-exemples-dutilisation)
- [🗂️ Logs & documentation](#️-logs--documentation)

---

## 🧰 Fonctionnalités principales

**VoidScan** est un scanner de ports open source, léger et silencieux, conçu pour les professionnels de la cybersécurité et les pentesters. Développé en **Rust** pour garantir performance et sécurité, il met l’accent sur la **discrétion** lors des analyses réseau afin d’éviter la détection par les systèmes ciblés.

- Scan **TCP/UDP furtif** avec réglage du timing  
- **Thread pool avancé** pour optimiser la vitesse sans saturer le réseau  
- **Logs détaillés** dans `logs/trace.log` avec métadonnées de session (timestamp, ports ouverts, etc.)  
- Export des résultats en **JSON, XML ou CSV** pour intégration dans un SIEM  
- **Aucune dépendance externe**, uniquement la bibliothèque standard de Rust  
- Support **IPv4 & IPv6**  
- Taux de **faux positifs réduit** grâce à une gestion adaptative des timeouts  
- **Système de plugins** prévu dans les prochaines versions  

---

## ⚙️ Installation rapide

```bash
git clone https://gitlab.com/void/voidscan.git
cd voidscan
cargo build --release
```

---

## 🚀 Exemples d'utilisation

Scan complet des ports TCP :

```bash
./voidscan -t 10.0.0.1 -p 1-65535
```

Scan UDP du port 53 :

```bash
./voidscan -t 10.0.0.1 -p 53 -u
```

Changer le format de sortie :

```bash
./voidscan -o json   # ou xml / csv
```

Obtenir toutes les options disponibles :

```bash
./voidscan --help
```

---

## 🗂️ Logs & documentation

Les logs (`logs/trace.log`) contiennent :
- Timestamps
- Ports ouverts détectés
- Coordonnées GPS (si activées)
- Informations utilisateur (alias/tag)

Exemple de log :

```
# Trace Log - VoidScan v0.3.1-alpha
Timestamp: 2025-07-15T14:35:02Z
User: hack_the_void
Open ports: 22, 80, 443
GPS coords: 48.8566, 2.3522
Notes: Silent mode enabled
```

📚 Plus de détails disponibles dans la [RUFINELucia](https://github.com/RUFINELucia)

---

## 🛣️ Roadmap (prochaines étapes)

- `v0.4.0` – Système de plugins personnalisés  
- `v0.5.0` – Interface graphique (GUI)  
- `v0.6.0` – Intégration dans des frameworks de pentest  
- `v1.0.0` – Version stable avec documentation complète  

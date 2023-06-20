
- Памятка как заставить tsc работать с baseurl и paths
```
npm -i -y
tsc --init
npm add --dev tsc-alias
```
- package.json билд
```json
"scripts": {
  "build": "tsc && tsc-alias"
},
```
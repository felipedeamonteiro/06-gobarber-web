```
{
  "name": "06-gobarber-web",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.0",
    "@testing-library/react": "^10.4.3",
    "@testing-library/user-event": "^12.0.11",
    "@types/jest": "^24.0.0",
    "@types/node": "^20.10.4",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^16.9.0",
    "@typescript-eslint/eslint-plugin": "^6.15.0",
    "@typescript-eslint/parser": "^6.15.0",
    "@unform/core": "^2.1.3",
    "@unform/web": "^2.1.3",
    "axios": "^0.21.2",
    "date-fns": "^2.16.1",
    "polished": "^3.6.5",
    "react": "^16.13.1",
    "react-day-picker": "^7.4.8",
    "react-dom": "^16.13.1",
    "react-icons": "^3.10.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.0",
    "react-spring": "^8.0.27",
    "styled-components": "^5.1.1",
    "typescript": "^5.3.3",
    "uuidv4": "^6.2.0",
    "websocket-extensions": "^0.1.4",
    "yup": "^1.3.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jest-environment-jsdom-sixteen",
    "test:coverage": "react-scripts test --env=jest-environment-jsdom-sixteen --coverage --watchAll=false",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "jest": {
    "collectCoverageFrom": [
      "src/pages/**/*.tsx",
      "src/components/**/*.tsx",
      "src/hooks/*.tsx",
      "!src/hooks/index.tsx"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@testing-library/react-hooks": "^3.4.2",
    "@types/react-router-dom": "^5.3.3",
    "@types/styled-components": "^5.1.26",
    "@types/yup": "^0.32.0",
    "axios-mock-adapter": "^1.18.2",
    "eslint": "^6.6.0",
    "eslint-config-airbnb": "^18.2.0",
    "eslint-config-prettier": "^6.11.0",
    "eslint-import-resolver-typescript": "^2.0.0",
    "eslint-plugin-import": "^2.20.1",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-react": "^7.20.0",
    "eslint-plugin-react-hooks": "^4.0.8",
    "jest-environment-jsdom-sixteen": "^1.0.3",
    "prettier": "^2.0.5",
    "react-test-renderer": "^16.13.1"
  }
}
```

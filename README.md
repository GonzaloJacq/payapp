{

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

}

{

# PayApp

Aplicación web para gestión y simulación de pagos fiscales y previsionales en Uruguay, pensada para unipersonales y profesionales independientes.

## Descripción

PayApp permite:

- **Realizar pagos simulados** de BPS, DGI y Caja Profesional, registrando el monto, período y método de pago.
- **Consultar una guía** sobre cómo y cuándo pagar cada obligación fiscal, con instrucciones y enlaces útiles.
- **Calcular el monto total de obligaciones** mensuales según los ingresos y el tipo de actividad, simulando pagos de BPS, DGI, Caja Profesional e IRPF.
- **Registro y login de usuarios** para personalizar la experiencia.

## Funcionalidades principales

### 1. Realizar pagos

Desde la sección "Realizar pago" se puede elegir el tipo de pago (BPS, DGI, Caja Profesional) y completar un formulario con los datos requeridos. Al enviar el formulario, se muestra una confirmación del pago simulado.

### 2. Guía de pagos

La sección "Guía de pagos" explica cómo cumplir con las obligaciones fiscales en Uruguay, incluyendo pasos para pagar en DGI, BPS y Caja Profesional, fechas importantes y recomendaciones.

### 3. Calculadora de pagos

La calculadora permite ingresar los ingresos mensuales y seleccionar las obligaciones aplicables. Calcula automáticamente los montos aproximados a pagar por BPS, DGI, Caja Profesional e IRPF, mostrando el total mensual estimado.

### 4. Registro y login

Los usuarios pueden registrarse y acceder con usuario y contraseña. El registro simula la creación de cuenta y el login permite acceder a las funcionalidades personalizadas.

## Tecnologías utilizadas

- **React** + **TypeScript**
- **Vite** para el entorno de desarrollo
- **SweetAlert2** para notificaciones
- **React Hook Form** para formularios

## Estructura del proyecto

- `src/pages/` contiene las páginas principales: inicio, pagar, guía, calculadora, login y registro.
- `src/features/components/pagos/` contiene los formularios de pago para BPS, DGI y Caja Profesional.
- `src/features/components/ui/` contiene componentes reutilizables de interfaz.
- `src/features/store/` contiene la gestión de usuario.

## Instalación y ejecución

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Ejecutar la app:
   ```bash
   npm run dev
   ```

## Autor

Gonzalo Jacques

}

# Design System (jt-design-system)

## Variables

### Globals

```css
:root {
  --ds-grey-700: #171e30;
  --ds-grey-600: #2d303c;
  --ds-grey-500: #484848;
  --ds-grey-400: #d2d2d2;
  --ds-grey-300: #d4d4d4;
  --ds-grey-200: #efefef;
  --ds-grey-100: #f5f5f5;
  --ds-grey-000: #fff;

  --ds-red-300: #f4aaaa;
  --ds-red-400: #f26464;
  --ds-red-500: #d55858;

  --ds-green-300: #bce5d1;
  --ds-green-400: #4bde97;
  --ds-green-500: #4ab292;

  --ds-yellow-300: #ffe8c6;
  --ds-yellow-400: #ffb648;
  --ds-yellow-500: #e2a445;

  --ds-magenta-300: #da6de2;
  --ds-magenta-400: #be2ec7;
  --ds-magenta-500: #9d24a6;

  --ds-cyan-300: #24ecf3;
  --ds-cyan-400: #02c1c8;
  --ds-cyan-500: #00a2a8;

  --ds-blue-100: #e8f0fc;
  --ds-blue-200: #d4e4fc;
  --ds-blue-300: #adc5ea;
  --ds-blue-400: #4177f6;
  --ds-blue-500: #004cc2;

  --ds-primary: var(--ds-blue-500, #004cc2);
  --ds-secondary: var(--ds-blue-400, #4177f6);

  --ds-focus-ring-color: var(--ds-blue-400, #4177f6);
  --ds-focus-ring-width: 2px;
  --ds-focus-ring-offset: 2px;

  --ds-sans-serif-font: "Open Sans", inherit, sans-serif;
  --ds-mono-font: "JetBrains Mono", monospace;

  --ds-label-color: var(--ds-grey-500, #484848);
  --ds-label-font-size: 12px;

  --ds-radius-100: 6px;
  --ds-radius-200: 10px;
  --ds-radius-300: 15px;
  --ds-radius-400: 20px;

  --ds-blur: 8px;

  --ds-shadow-100: 0px 3px 6px rgba(0, 0, 0, 0.12);
  --ds-shadow-200: 0 5px 10px rgba(0, 0, 0, 0.12);
  --ds-shadow-300: 0 8px 30px rgba(0, 0, 0, 0.12);
  --ds-shadow-400: 0 30px 60px rgba(0, 0, 0, 0.12);

  --ds-transition-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Components specifics

#### Input, Select, Textarea, Checkbox

```css
:root {
  --ds-input-padding: 8px;
  --ds-input-compact-padding: 5px;
  --ds-input-font-size: 16px;
  --ds-input-foreground: var(--ds-grey-700, #171e30);
  --ds-input-background: var(--ds-grey-100, #f5f5f5);
  --ds-input-border: 0;
  --ds-input-radius: var(--ds-radius-100, 3px);
  --ds-input-shadow: 0;
}
```

#### Button

```css
:root {
  --ds-button-padding: 8px;
  --ds-button-compact-padding: 5px;
  --ds-button-font-size: 14px;
  --ds-button-foreground: var(--ds-grey-000, #fff);
  --ds-button-text-transform: uppercase;
  --ds-button-line-height: 1;
  --ds-button-letter-spacing: normal;
  --ds-button-font-weight: 700;
  --ds-button-background: var(--ds-secondary, var(--ds-blue-400, #4177f6));
  --ds-button-hover-background: var(--ds-primary, var(--ds-blue-500, #004cc2));
  --ds-button-border: 0;
  --ds-button-radius: var(--ds-radius-100, 3px);
  --ds-button-shadow: 0;
}
```

#### NumberPicker

```css
:root {
  --ds-number-picker-font-size: 14px;
  --ds-number-picker-foreground: var(--ds-grey-600, #2d303c);
}
```

#### Checkbox

```css
:root {
  --ds-checkbox-label-foreground: var(--ds-grey-600, #2d303c);
  --ds-checkbox-foreground: var(--ds-secondary, var(--ds-blue-400, #4177f6));
}
```

#### DatePicker

```css
:root {
  --ds-date-picker-shadow: var(--ds-shadow-200, 0 5px 10px rgba(0, 0, 0, 0.12));
  --ds-date-picker-radius: var(--ds-radius-200, 10px);
}
```

#### Snackbar

```css
:root {
  --ds-snackbar-font-size: 18px;
  --ds-snackbar-font-weight: 700;
  --ds-snackbar-shadow: var(--ds-shadow-200, 0 5px 10px rgba(0, 0, 0, 0.12));
  --ds-snackbar-radius: var(--ds-radius-200, 10px);
  --ds-snackbar-z-index: 100;
}
```

#### Tooltip

```css
:root {
  --ds-tooltip-padding: 6px 10px;
  --ds-tooltip-font-size: 13px;
  --ds-tooltip-white-space: nowrap;
  --ds-tooltip-foreground: var(--ds-grey-000, #fff);
  --ds-tooltip-background: var(--ds-grey-500, #484848);
  --ds-tooltip-shadow: none;
  --ds-tooltip-radius: var(--ds-radius-200, 10px);
  --ds-tooltip-opacity: 0.9;
  --ds-tooltip-z-index: 90;
}
```

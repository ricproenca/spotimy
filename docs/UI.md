# Material UI

## Properties

- https://mui.com/system/properties/

### sx

- https://mui.com/system/the-sx-prop/#main-content
- is a shortcut for defining custom style that has access to the theme.

```javascript
<Box sx={{ color: 'text.secondary' }}>BOX</Box>
<Box sx={theme => ({ color: theme.palette.text.secondary })}>BOX</Box>
```

### theme aware properties

- https://mui.com/system/the-sx-prop/#theme-aware-properties

-m margin
-mt margin-top
-mr margin-right
-mb margin-bottom
-ml margin-left
-mx margin-left, margin-right
-my margin-top, margin-bottom
-p padding
-pt padding-top
-pr padding-right
-pb padding-bottom
-pl padding-left
-px padding-left, padding-right
-py padding-top, padding-bottom

## Fonts

body { font-family: "Alegreya Sans"; }
body { font-family: "Roboto"; }

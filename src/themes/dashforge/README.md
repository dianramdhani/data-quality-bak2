# Dashforge

> Update angular.json

```javascript
...
"styles": [
	"src/themes/dashforge/lib/@fortawesome/fontawesome-free/css/all.min.css",
	"src/themes/dashforge/lib/ionicons/css/ionicons.min.css",
	"src/themes/dashforge/assets/css/dashforge.css",
	"src/themes/dashforge/assets/css/dashforge.dashboard.css",
	...
],
"scripts": [
	...
	"src/themes/dashforge/lib/jquery/jquery.min.js",
	"src/themes/dashforge/lib/bootstrap/js/bootstrap.bundle.min.js",
	"src/themes/dashforge/lib/feather-icons/feather.min.js",
	"src/themes/dashforge/lib/perfect-scrollbar/perfect-scrollbar.min.js",
	"src/themes/dashforge/lib/jquery.flot/jquery.flot.js",
	"src/themes/dashforge/lib/jquery.flot/jquery.flot.stack.js",
	"src/themes/dashforge/lib/jquery.flot/jquery.flot.resize.js",
	"src/themes/dashforge/assets/js/dashforge.js",
	{
		"input": "src/themes/dashforge/assets/js/dashforge.aside.js",
		"lazy": true,
		"bundleName": "dashforge.aside"
	}
]
...
```

> Add code on wrapper component

```typescript
import { replace } from 'feather-icons';
...
ngAfterViewInit() {
    const scriptElement = document.createElement('script');
    scriptElement.src = './dashforge.aside.js';
    document.body.appendChild(scriptElement);
    replace();
}
```
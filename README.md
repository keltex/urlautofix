# urlautofix

This is a simple jquery plugin to auto-fix URLs that are missing http:// or https:// in a html input. 
For example you might commonly ask a user for a website URL. The often don't include http://. This plugin
automatically adds the prefix when the input's change event occurs.

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.urlautofix.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").urlAutoFix();
	```



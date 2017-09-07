# urlautofix

This is a simple jquery plugin to fix URLs that are missing http:// or https:// in an html input. 
For example you might commonly a user for a website URL and they often forget to include the http://. 
For example, if somebody types in _www.nhc.noaa.gov_ it would be automatically changed to _http://www.nhc.noaa.gov_.

The prefix is added when the input's change event occurs.

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

### License 

Licensed under the MIT license.






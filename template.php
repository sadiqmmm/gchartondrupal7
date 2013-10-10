<?php

 drupal_add_js('https://www.google.com/jsapi', 'external');
 drupal_add_js(drupal_get_path('theme','jazzycrm'). '/js/gchart.js', array('type' => 'file', 'scope' => 'footer')); 
?>

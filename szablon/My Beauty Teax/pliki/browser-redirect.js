jQuery(document).ready(function(){if(jQuery.cookie!==undefined){jQuery.cookie('wpml_browser_redirect_test','1');var cookie_enabled=jQuery.cookie('wpml_browser_redirect_test')==='1';jQuery.removeCookie('wpml_browser_redirect_test');if(cookie_enabled){var cookie_params=wpml_browser_redirect_params.cookie;var cookie_name=cookie_params.name;if(!jQuery.cookie(cookie_name)){var pageLanguage=wpml_browser_redirect_params.pageLanguage,browserLanguage='en';jQuery.ajax({async:false,data:{icl_ajx_action:'get_browser_language'},success:function(ret){browserLanguage=ret;}});var cookie_options={expires:cookie_params.expiration/24,path:cookie_params.path?cookie_params.path:'/',domain:cookie_params.domain?cookie_params.domain:''};jQuery.cookie(cookie_name,browserLanguage,cookie_options);if(pageLanguage!==browserLanguage){var redirectUrl;var languageUrls=wpml_browser_redirect_params.languageUrls;if(languageUrls[browserLanguage]!==undefined){redirectUrl=languageUrls[browserLanguage];}else if(languageUrls[browserLanguage.substr(0,2)]!==undefined){redirectUrl=languageUrls[browserLanguage.substr(0,2)];}else if(languageUrls[browserLanguage.substr(3,2)]!==undefined){redirectUrl=languageUrls[browserLanguage.substr(3,2)];}
if(redirectUrl!==undefined){window.location=redirectUrl;}}}}}});
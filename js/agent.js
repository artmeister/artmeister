	var reffer_domain = location.host.replace('www.','');
	var agent = '';
	var url = '';
		
	function getGet(name) 	
	{
		var s = window.location.search;
		s = s.match(new RegExp(name + '=([^&=]+)'));
		return s ? s[1] : false;
	}

	agent = getGet('agent');
	
	if  (agent) 
	{
		if (reffer_domain)
		{
			url = 'https://my.fxopen.com/handlers/agenthandler?agent='+agent+'&referer='+reffer_domain;
		}
		else
		{
			url = 'https://my.fxopen.com/handlers/agenthandler?agent='+agent;
		}
		document.write('<iframe src="'+ url +'" style="border: none; display:none"></iframe>');
	}
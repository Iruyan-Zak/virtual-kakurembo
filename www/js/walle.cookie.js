    $(document).ready(function(){
			$.cookie.json = true;
            
            var memberA = $("#memberA");
            var cookParam = $.cookie('walle', {path:'/' , expires: 7 });
            
			if(cookParam == null){
				var cookParam = {};
			}
            
            
            if(cookParam['counter'] == null){
				cookParam['counter'] = 0;
                var countA = cookParam['counter'];
			}
            
            $("#current").each(function(){
                 var txt = $(this).html();
                 var countA = cookParam['counter'];
                 $(this).html(
                     txt.replace(/aaaaa/g, countA)
                );
                
                $(this).html(
                     //txt.replace(/bbbbb/g, countB)
                );
            });
            
            
			$("#memberA").click(function(){
				if(cookParam == null){
					cookParam = $.cookie('walle', {path:'/' , expires: 7 });
				}
				
				if(cookParam['memberA'] === 'Captured'){
					window.alert('既に捕まえています');
					return false;
				}
				
                window.alert('Aを捕縛した！\nしかし、こいつはボスではないようだ・・・');
				cookParam['memberA'] = 'Captured';
                cookParam['counter']++;
                $("#memberA").text("Captured");
			});
		});

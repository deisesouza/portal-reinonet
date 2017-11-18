
function _(id){
		return document.getElementById(id);
	}

	function audioApp(){
		var audio = new Audio();
		var audio_folder = "audios/"
		var audio_ext = ".mp3";
		var audio_index = 1;
		var is_playing = false;
		var playingtrack;
		var trackbox = _("trackbox");
		var tracks = {
			"track1": ["01 Amor Verdadeiro", "01 amor verdadeiro"],
			"track2": ["02 Céu dos Céus", "02 céu dos céus"],
			"track3": ["03 Nova Criação", "03 nova criação"],
			"track4": ["04 Espontânea Oferta", "04 espontânea oferta"],
			"track5": ["05 Faz-me transbordar", "05 faz-me transbordar"],
			"track6": ["06 Fiéis Adoradores", "06 fiéis adoradores"],
			"track7": ["07 Venha Adorar", "07 venha adorar"],
			"track8": ["08 Prazer em Ti", "08 prazer em ti"],
			"track9": ["09 Restituição", "09 restituição"],
			"track10": ["10 Primeiro Amor", "10 primeiro amor"],
			"track11": ["11 Desejo de Adorar", "11 desejo de adorar"],
			"track12": ["12 Leva-me Após Ti", "12 leva-me após ti"],
		};

		for(var track in tracks){
				var tb = document.createElement("div");
				var pb = document.createElement("button");
				var tn = document.createElement("div");
				tb.className = "trackbar";
				pb.className = "playbutton";
				tn.className = "trackname";
				tn.innerHTML = audio_index+". "+tracks[track][0];
				pb.id = tracks[track][1];
				pb.addEventListener("click", switchTrack);
				tb.appendChild(pb);
				tb.appendChild(tn);
				trackbox.appendChild(tb);
				audio_index++;
			}


		audio.addEventListener("ended",function(){
	    _(playingtrack).style.background = "url(imagens/play.png)";
		playingtrack = "";
		is_playing = false;
	});


		function switchTrack(event){
		if(is_playing){
		    if(playingtrack != event.target.id){
			    is_playing = true;
				_(playingtrack).style.background = "url(imagens/play.png)";
			    event.target.style.background = "url(imagens/pause.png)";
			    audio.src = audio_folder+event.target.id+audio_ext;
	            audio.play();
			} else {
			    audio.pause();
			    is_playing = false;
				event.target.style.background = "url(imagens/play.png)";
			}
		} else {
			is_playing = true;
			event.target.style.background = "url(imagens/pause.png)";
			if(playingtrack != event.target.id){
				audio.src = audio_folder+event.target.id+audio_ext;
			}
	        audio.play();
		}
		playingtrack = event.target.id;
	}



	}//fim da funcão audioApp

	window.addEventListener("load", audioApp);



	
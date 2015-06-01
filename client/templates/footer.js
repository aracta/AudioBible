Session.setDefault('isPlaying', false);   //当前是否正在播放

Template.footer.helpers({
	isPlaying: function () {
		return Session.get('isPlaying');
	}
});

Template.footer.events({
	'click button[data-skipbackward]': function () {
		lastChapter();
		abcGlobal.media.playAudio();
	},'click button[data-play]': function () {
		Session.set('isPlaying', ! Session.get('isPlaying'));
		if(Session.get('isPlaying')){
			abcGlobal.media.playAudio();
		}else{
			abcGlobal.media.pauseAudio();
		}
	},'click button[data-skipforward]': function () {
		nextChapter();
		abcGlobal.media.playAudio();
	}
	
});
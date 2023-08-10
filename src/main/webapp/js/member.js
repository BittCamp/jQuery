$(function(){
	$('#join').submit(function(){
		$('#juminnoDiv').empty();
		
		var user_id = $('input[name="user_id"]').val();
		if(!user_id){
			alert("아이디를 입력하세요.");
			$('input[name=user_id]').focus();
			return false;
		}
		var user_pw = $('input[name="user_pw"]').val();
		if(user_pw == ''){
			alert("패스워드를 입력하세요.");
			$('input[name=user_pw]').focus();
			return false;
		}
		var juminno = $('input[name="juminno"]').val();
		if(!juminno){
			$('#juminnoDiv').text('주민번호를 입력하세요.');
			$('input[name=juminno]').focus();
			return false;
		}
		if(!$('input[name="gender"]').is(':checked') ){ 
			alert("성별을 입력하세요.") // eq(1) 같냐 gt 크냐
			//radio로 배열을 받는다.
			//현재문서. form의 이름이 와줘야된다.
			//document.form1.gender[1].checked = true;
			$('input[name="gender"]:eq(1)').prop('checked',true);
			
			return false;
		}
		var email = $('input[name="email"]').val();
		if(!email){
			alert("이메일을 입력하세요.");
			$('input[name=email]').focus();
			return false;
		}
		var user_pw = $('input[name="url"]').val();
		if(user_pw == ''){
			alert("URL을 입력하세요.");
			$('input[name=url]').focus();
			return false;
		}
		var phone = $('input[name="phone"]').val();
		if(!phone){
			alert("핸드폰 번호를 입력하세요.");
			$('input[name=phone]').focus();
			return false;
		}
		if(!$('input[name="hobby"]').is(':checked')){
			alert("취미를 입력하세요.");
			$('input[name="hobby"]:eq(0)').attr('checked',true)
			return false;
		}
		if($('select[name="job"] > option:selected').index() < 1 ) {/*1보다 작다는건 0*/
			alert("직업을 입력하세요.");
			$('select[name ="job"] > option:eq(1)').attr('selected', true)
			return false;
		}
		
		return false;
	});
});
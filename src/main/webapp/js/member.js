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
			$('input[name="user_pw"]').focus();
			return false;
		}
		var juminno = $('input[name="juminno"]').val();
		if(!juminno){
			$('#juminnoDiv').text('주민번호를 입력하세요.');
			$('input[name="juminno"]').focus();
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
		var url = $('input[name="url"]').val();
		if(url == ''){
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
		
		//입력한 내용을 화면에 출력.
		var gender = $('input[name ="gender"]:checked').val();
		//hobby에서 선택된 값들 가져오기. 배열.
		var hobby = $('input[name = "hobby"]:checked')
		var hobby_val = '';//hobby 안에 들어있는 값들의 모임. 
		hobby.each(function(){                    //자바스크립트기때문에 펑션이 꼭들어간다.//for(var i=0; i< hobby.length; i++){} 와 같은거
			hobby_val += $(this).val(); // 값을 하비바에 담아라.
		});
		
		var job = $('select[name="job"] > option:selected').val();// 선택된 것들의 값을 가지고 와라.
		 
		var result = '<ul>';
		result += '<li> 아이디 : ' + user_id + '</li>';
		result += '<li> 비밀번호 : ' + user_pw + '</li>';
		result += '<li> 주민번호 : ' + juminno + '</li>';
		result += '<li> 성별 : ' + gender + '</li>';
		result += '<li> 이메일 : ' + email + '</li>';
		result += '<li> 홈페이지 : ' + url + '</li>';
		result += '<li> 핸드폰 : ' + phone + '</li>';
		result += '<li> 취미 : ' + hobby_val + '</li>';
		result += '<li> 직업 : ' + job + '</li>';
		result += '</ul>';
		
		$('body').html(result);
		 
		 return false;
	});
});
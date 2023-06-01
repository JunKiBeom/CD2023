// "시/도" 선택 시 해당 시의 "시/구/군" 옵션을 동적으로 변경
const citySelect = document.getElementById("city");
const districtSelect = document.getElementById("district");
const addressselect = document.getElementById("address")

citySelect.addEventListener("change", function() {
    const city = citySelect.value;
    if (city === "서울시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="강남구">강남구</option>
        <option value="강동구">강동구</option>
        <option value="강북구">강북구</option>
        <option value="강서구">강서구</option>
        <option value="관악구">관악구</option>
        <option value="광진구">광진구</option>
        <option value="구로구">구로구</option>
        <option value="금천구">금천구</option>
        <option value="노원구">노원구</option>
        <option value="도봉구">도봉구</option>
        <option value="동대문구">동대문구</option>
        <option value="동작구">동작구</option>
        <option value="마포구">마포구</option>
        <option value="서대문구">서대문구</option>
        <option value="서초구">서초구</option>
        <option value="성동구">성동구</option>
        <option value="성북구">성북구</option>
        <option value="송파구">송파구</option>
        <option value="양천구">양천구</option>
        <option value="영등포구">영등포구</option>
        <option value="용산구">용산구</option>
        <option value="은평구">은평구</option>
        <option value="종로구">종로구</option>
        <option value="중구">중구</option>
        <option value="중랑구">중랑구</option>
    `;
// 다른 구들에 대한 조건문을 추가로 작성해주세요.

    } else if (city === "대전시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="동구">동구</option>
        <option value="중구">중구</option>
        <option value="서구">서구</option>
        <option value="유성구">유성구</option>
        <option value="대덕구">대덕구</option>
        <!-- 다른 구들을 추가해 주세요 -->
    `;
    } else if (city == "부산시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="강서구">강서구</option>
        <option value="금정구">금정구</option>
        <option value="기장군">기장군</option>
        <option value="남구">남구</option>
        <option value="동구">동구</option>
        <option value="동래구">동래구</option>
        <option value="부산진구">부산진구</option>
        <option value="북구">북구</option>
        <option value="사상구">사상구</option>
        <option value="사하구">사하구</option>
        <option value="서구">서구</option>
        <option value="수영구">수영구</option>
        <option value="연제구">연제구</option>
        <option value="영도구">영도구</option>
        <option value="중구">중구</option>
        <option value="해운대구">해운대구</option>
    `;
    } else if (city === "인천시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="강화군">강화군</option>
        <option value="계양구">계양구</option>
        <option value="남동구">남동구</option>
        <option value="동구">동구</option>
        <option value="미추홀구">미추홀구</option>
        <option value="부평구">부평구</option>
        <option value="서구">서구</option>
        <option value="연수구">연수구</option>
        <option value="옹진군">옹진군</option>
        <option value="중구">중구</option>
    `;
    } else if (city === "광주시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="광산구">광산구</option>
        <option value="남구">남구</option>
        <option value="동구">동구</option>
        <option value="북구">북구</option>
        <option value="서구">서구</option>
    `;
    } else if (city === "울산시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="남구">남구</option>
        <option value="동구">동구</option>
        <option value="북구">북구</option>
        <option value="울주군">울주군</option>
        <option value="중구">중구</option>
    `;
    } else if (city === "대구시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="남구">남구</option>
        <option value="달서구">달서구</option>
        <option value="달성군">달성군</option>
        <option value="동구">동구</option>
        <option value="북구">북구</option>
        <option value="서구">서구</option>
        <option value="수성구">수성구</option>
        <option value="중구">중구</option>
    `;
    } else if (city === "세종시") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="세종시">세종시</option>
    `;
    } else if (city === "경기도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="가평군">가평군</option>
        <option value="고양시 덕양구">고양시 덕양구</option>
        <option value="고양시 일산동구">고양시 일산동구</option>
        <option value="고양시 일산서구">고양시 일산서구</option>
        <option value="과천시">과천시</option>
        <option value="광명시">광명시</option>
        <option value="광주시">광주시</option>
        <option value="구리시">구리시</option>
        <option value="군포시">군포시</option>
        <option value="김포시">김포시</option>
        <option value="남양주시">남양주시</option>
        <option value="동두천시">동두천시</option>
        <option value="부천시 소사구">부천시 소사구</option>
        <option value="부천시 오정구">부천시 오정구</option>
        <option value="부천시 원미구">부천시 원미구</option>
        <option value="성남시 분당구">성남시 분당구</option>
        <option value="성남시 수정구">성남시 수정구</option>
        <option value="성남시 중원구">성남시 중원구</option>
        <option value="수원시 권선구">수원시 권선구</option>
        <option value="수원시 영통구">수원시 영통구</option>
        <option value="수원시 장안구">수원시 장안구</option>
        <option value="수원시 팔달구">수원시 팔달구</option>
        <option value="시흥시">시흥시</option>
        <option value="안산시 단원구">안산시 단원구</option>
        <option value="안산시 상록구">안산시 상록구</option>
        <option value="안성시">안성시</option>
        <option value="안양시 동안구">안양시 동안구</option>
        <option value="안양시 만안구">안양시 만안구</option>
        <option value="양주시">양주시</option>
        <option value="양평군">양평군</option>
        <option value="여주군">여주군</option>
        <option value="연천군">연천군</option>
        <option value="오산시">오산시</option>
        <option value="용인시 기흥구">용인시 기흥구</option>
        <option value="용인시 수지구">용인시 수지구</option>
        <option value="용인시 처인구">용인시 처인구</option>
        <option value="의왕시">의왕시</option>
        <option value="의정부시">의정부시</option>
        <option value="이천시">이천시</option>
        <option value="파주시">파주시</option>
        <option value="평택시">평택시</option>
        <option value="하남시">하남시</option>
        <option value="화성시">화성시</option>
    `;
    } else if (city === "강원도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="강릉시">강릉시</option>
        <option value="고성군">고성군</option>
        <option value="동해시">동해시</option>
        <option value="삼척시">삼척시</option>
        <option value="속초시">속초시</option>
        <option value="양구군">양구군</option>
        <option value="양양군">양양군</option>
        <option value="영월군">영월군</option>
        <option value="원주시">원주시</option>
        <option value="인제군">인제군</option>
        <option value="정선군">정선군</option>
        <option value="철원군">철원군</option>
        <option value="춘천시">춘천시</option>
        <option value="태백시">태백시</option>
        <option value="평창군">평창군</option>
        <option value="홍천군">홍천군</option>
        <option value="화천군">화천군</option>
        <option value="횡성군">횡성군</option>
    `;
    } else if (city === "충청북도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="괴산군">괴산군</option>
        <option value="단양군">단양군</option>
        <option value="보은군">보은군</option>
        <option value="영동군">영동군</option>
        <option value="옥천군">옥천군</option>
        <option value="음성군">음성군</option>
        <option value="제천시">제천시</option>
        <option value="증평군">증평군</option>
        <option value="진천군">진천군</option>
        <option value="청주시 상당구">청주시 상당구</option>
        <option value="청주시 서원구">청주시 서원구</option>
        <option value="청주시 청원구">청주시 청원구</option>
        <option value="청주시 흥덕구">청주시 흥덕구</option>
        <option value="충주시">충주시</option>
    `;
    } else if (city === "충청남도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="계룡시">계룡시</option>
        <option value="공주시">공주시</option>
        <option value="금산군">금산군</option>
        <option value="논산시">논산시</option>
        <option value="당진시">당진시</option>
        <option value="보령시">보령시</option>
        <option value="부여군">부여군</option>
        <option value="서산시">서산시</option>
        <option value="서천군">서천군</option>
        <option value="아산시">아산시</option>
        <option value="예산군">예산군</option>
        <option value="천안시 동남구">천안시 동남구</option>
        <option value="천안시 서북구">천안시 서북구</option>
        <option value="청양군">청양군</option>
        <option value="태안군">태안군</option>
        <option value="홍성군">홍성군</option>
    `;
    } else if (city === "전라북도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="고창군">고창군</option>
        <option value="군산시">군산시</option>
        <option value="김제시">김제시</option>
        <option value="남원시">남원시</option>
        <option value="무주군">무주군</option>
        <option value="부안군">부안군</option>
        <option value="순창군">순창군</option>
        <option value="완주군">완주군</option>
        <option value="익산시">익산시</option>
        <option value="임실군">임실군</option>
        <option value="장수군">장수군</option>
        <option value="전주시 덕진구">전주시 덕진구</option>
        <option value="전주시 완산구">전주시 완산구</option>
        <option value="정읍시">정읍시</option>
        <option value="진안군">진안군</option>
    `;
    } else if (city === "전라남도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="강진군">강진군</option>
        <option value="고흥군">고흥군</option>
        <option value="곡성군">곡성군</option>
        <option value="광양시">광양시</option>
        <option value="구례군">구례군</option>
        <option value="나주시">나주시</option>
        <option value="담양군">담양군</option>
        <option value="목포시">목포시</option>
        <option value="무안군">무안군</option>
        <option value="보성군">보성군</option>
        <option value="순천시">순천시</option>
        <option value="신안군">신안군</option>
        <option value="여수시">여수시</option>
        <option value="영광군">영광군</option>
        <option value="영암군">영암군</option>
        <option value="완도군">완도군</option>
        <option value="장성군">장성군</option>
        <option value="장흥군">장흥군</option>
        <option value="진도군">진도군</option>
        <option value="함평군">함평군</option>
        <option value="해남군">해남군</option>
        <option value="화순군">화순군</option>
    `;
    } else if (city === "경상북도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="경산시">경산시</option>
        <option value="경주시">경주시</option>
        <option value="고령군">고령군</option>
        <option value="구미시">구미시</option>
        <option value="군위군">군위군</option>
        <option value="김천시">김천시</option>
        <option value="문경시">문경시</option>
        <option value="봉화군">봉화군</option>
        <option value="상주시">상주시</option>
        <option value="성주군">성주군</option>
        <option value="안동시">안동시</option>
        <option value="영덕군">영덕군</option>
        <option value="영양군">영양군</option>
        <option value="영주시">영주시</option>
        <option value="영천시">영천시</option>
        <option value="예천군">예천군</option>
        <option value="울릉군">울릉군</option>
        <option value="울진군">울진군</option>
        <option value="의성군">의성군</option>
        <option value="청도군">청도군</option>
        <option value="청송군">청송군</option>
        <option value="칠곡군">칠곡군</option>
        <option value="포항시 남구">포항시 남구</option>
        <option value="포항시 북구">포항시 북구</option>
    `;
    } else if (city === "경상남도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="거제시">거제시</option>
        <option value="거창군">거창군</option>
        <option value="고성군">고성군</option>
        <option value="김해시">김해시</option>
        <option value="남해군">남해군</option>
        <option value="밀양시">밀양시</option>
        <option value="사천시">사천시</option>
        <option value="산청군">산청군</option>
        <option value="양산시">양산시</option>
        <option value="의령군">의령군</option>
        <option value="진주시">진주시</option>
        <option value="창녕군">창녕군</option>
        <option value="창원시 마산합포구">창원시 마산합포구</option>
        <option value="창원시 마산회원구">창원시 마산회원구</option>
        <option value="창원시 성산구">창원시 성산구</option>
        <option value="창원시 의창구">창원시 의창구</option>
        <option value="창원시 진해구">창원시 진해구</option>
        <option value="통영시">통영시</option>
        <option value="하동군">하동군</option>
        <option value="함안군">함안군</option>
        <option value="함양군">함양군</option>
        <option value="합천군">합천군</option>
    `;
    } else if (city === "제주도") {
        districtSelect.innerHTML = `
        <option value="선택">선택</option>
        <option value="서귀포시">서귀포시</option>
        <option value="제주시">제주시</option>
    `;
    } else {
        districtSelect.innerHTML = `<option value="">구/군 선택</option>`;
    }
})

districtSelect.addEventListener("change", function() {
    // 서울시
    const district = districtSelect.value;
    if (districtSelect.value === '강남구') {
        addressselect.innerHTML = `
            <option value='개포동'>개포동</option>
            <option value='논현동'>논현동</option>
            <option value='대치동'>대치동</option>
            <option value='도곡동'>도곡동</option>
            <option value='삼성동'>삼성동</option>
            <option value='세곡동'>세곡동</option>
            <option value='수서동'>수서동</option>
            <option value='신사동'>신사동</option>
            <option value='압구정동'>압구정동</option>
            <option value='역삼동'>역삼동</option>
            <option value='율현동'>율현동</option>
            <option value='일원동'>일원동</option>
            <option value='자곡동'>자곡동</option>
            <option value='청담동'>청담동</option>
        `;
    }

    else if (citySelect.value === '서울시' && districtSelect.value === '강동구') {
        addressselect.innerHTML = `
            <option value='강일동'>강일동</option>
            <option value='고덕동'>고덕동</option>
            <option value='길동'>길동</option>
            <option value='둔촌동'>둔촌동</option>
            <option value='명일동'>명일동</option>
            <option value='상일동'>상일동</option>
            <option value='성내동'>성내동</option>
            <option value='암사동'>암사동</option>
            <option value='천호동'>천호동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '강북구') {
        addressselect.innerHTML = `
            <option value='미아동'>미아동</option>
            <option value='번동'>번동</option>
            <option value='수유동'>수유동</option>
            <option value='우이동'>우이동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '강서구') {
        addressselect.innerHTML = `
            <option value='가양동'>가양동</option>
            <option value='개화동'>개화동</option>
            <option value='공항동'>공항동</option>
            <option value='과해동'>과해동</option>
            <option value='내발산동'>내발산동</option>
            <option value='등촌동'>등촌동</option>
            <option value='마곡동'>마곡동</option>
            <option value='방화동'>방화동</option>
            <option value='염창동'>염창동</option>
            <option value='오곡동'>오곡동</option>
            <option value='오쇠동'>오쇠동</option>
            <option value='외발산동'>외발산동</option>
            <option value='화곡동'>화곡동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '관악구') {
        addressselect.innerHTML = `
            <option value='남현동'>남현동</option>
            <option value='봉천동'>봉천동</option>
            <option value='신림동'>신림동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '광진구') {
        addressselect.innerHTML = `
            <option value='광장동'>광장동</option>
            <option value='구의동'>구의동</option>
            <option value='군자동'>군자동</option>
            <option value='능동'>능동</option>
            <option value='자양동'>자양동</option>
            <option value='중곡동'>중곡동</option>
            <option value='화양동'>화양동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '구로구') {
        addressselect.innerHTML = `
            <option value='가리봉동'>가리봉동</option>
            <option value='개봉동'>개봉동</option>
            <option value='고척동'>고척동</option>
            <option value='구로동'>구로동</option>
            <option value='궁동'>궁동</option>
            <option value='신도림동'>신도림동</option>
            <option value='오류동'>오류동</option>
            <option value='온수동'>온수동</option>
            <option value='천왕동'>천왕동</option>
            <option value='항동'>항동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '금천구') {
        addressselect.innerHTML = `
            <option value='가산동'>가산동</option>
            <option value='독산동'>독산동</option>
            <option value='시흥동'>시흥동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '노원구') {
        addressselect.innerHTML = `
            <option value='공릉동'>공릉동</option>
            <option value='상계동'>상계동</option>
            <option value='월계동'>월계동</option>
            <option value='중계동'>중계동</option>
            <option value='하계동'>하계동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '도봉구') {
        addressselect.innerHTML = `
            <option value='도봉동'>도봉동</option>
            <option value='방학동'>방학동</option>
            <option value='쌍문동'>쌍문동</option>
            <option value='창동'>창동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '동대문구') {
        addressselect.innerHTML = `
            <option value='답십리동'>답십리동</option>
            <option value='신설동'>신설동</option>
            <option value='용두동'>용두동</option>
            <option value='이문동'>이문동</option>
            <option value='장안동'>장안동</option>
            <option value='전농동'>전농동</option>
            <option value='제기동'>제기동</option>
            <option value='청량리동'>청량리동</option>
            <option value='회기동'>회기동</option>
            <option value='휘경동'>휘경동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '동작구') {
        addressselect.innerHTML = `
            <option value='노량진동'>노량진동</option>
            <option value='대방동'>대방동</option>
            <option value='동작동'>동작동</option>
            <option value='본동'>본동</option>
            <option value='사당동'>사당동</option>
            <option value='상도1동'>상도1동</option>
            <option value='상도동'>상도동</option>
            <option value='신대방동'>신대방동</option>
            <option value='흑석동'>흑석동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '마포구') {
        addressselect.innerHTML = `
            <option value='공덕동'>공덕동</option>
            <option value='구수동'>구수동</option>
            <option value='도화동'>노고산동</option>
            <option value='당인동'>당인동</option>
            <option value='대흥동'>대흥동</option>
            <option value='도화동'>도화동</option>
            <option value='동교동'>동교동</option>
            <option value='마포동'>마포동</option>
            <option value='망원동'>망원동</option>
            <option value='상수동'>상수동</option>
            <option value='상암동'>상암동</option>
            <option value='서교동'>서교동</option>
            <option value='성산동'>성산동</option>
            <option value='신공덕동'>신공덕동</option>
            <option value='신수동'>신수동</option>
            <option value='신정동'>신정동</option>
            <option value='아현동'>아현동</option>
            <option value='연남동'>연남동</option>
            <option value='염리동'>염리동</option>
            <option value='용강동'>용강동</option>
            <option value='중동'>중동</option>
            <option value='창전동'>창전동</option>
            <option value='토정동'>토정동</option>
            <option value='하중동'>하중동</option>
            <option value='합정동'>합정동</option>
            <option value='현석동'>현석동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '서대문구') {
        addressselect.innerHTML = `
            <option value='남가좌동'>남가좌동</option>
            <option value='냉천동'>냉천동</option>
            <option value='대신동'>대신동</option>
            <option value='대현동'>대현동</option>
            <option value='미근동'>미근동</option>
            <option value='봉원동'>봉원동</option>
            <option value='북가좌동'>북가좌동</option>
            <option value='북아현동'>북아현동</option>
            <option value='신촌동'>신촌동</option>
            <option value='연희동'>연희동</option>
            <option value='영천동'>영천동</option>
            <option value='옥천동'>옥천동</option>
            <option value='창천동'>창천동</option>
            <option value='천연동'>천연동</option>
            <option value='충정로2가'>충정로2가</option>
            <option value='충정로3가'>충정로3가</option>
            <option value='합동'>합동</option>
            <option value='현저동'>현저동</option>
            <option value='홍은동'>홍은동</option>
            <option value='홍제동'>홍제동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '서초구') {
        addressselect.innerHTML = `
            <option value='내곡동'>내곡동</option>
            <option value='반포동'>반포동</option>
            <option value='방배동'>방배동</option>
            <option value='서초동'>서초동</option>
            <option value='신원동'>신원동</option>
            <option value='양재동'>양재동</option>
            <option value='염곡동'>염곡동</option>
            <option value='우면동'>우면동</option>
            <option value='원지동'>원지동</option>
            <option value='잠원동'>잠원동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '성동구') {
        addressselect.innerHTML = `
            <option value='금호동1가'>금호동1가</option>
            <option value='금호동2가'>금호동2가</option>
            <option value='금호동3가'>금호동3가</option>
            <option value='금호동4가'>금호동4가</option>
            <option value='도선동'>도선동</option>
            <option value='마장동'>마장동</option>
            <option value='사근동'>사근동</option>
            <option value='상왕십리동'>상왕십리동</option>
            <option value='성수동1가'>성수동1가</option>
            <option value='성수동2가'>성수동2가</option>
            <option value='송정동'>송정동</option>
            <option value='옥수동'>옥수동</option>
            <option value='용답동'>용답동</option>
            <option value='응봉동'>응봉동</option>
            <option value='하왕십리동'>하왕십리동</option>
            <option value='행당동'>행당동</option>
            <option value='홍익동'>홍익동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '성북구') {
        addressselect.innerHTML = `
            <option value='길음동'>길음동</option>
            <option value='돈암동'>돈암동</option>
            <option value='동선동'>동선동</option>
            <option value='동소문동'>동소문동</option>
            <option value='삼선동'>삼선동</option>
            <option value='상월곡동'>상월곡동</option>
            <option value='석관동'>석관동</option>
            <option value='월곡동'>월곡동</option>
            <option value='장위동'>장위동</option>
            <option value='정릉동'>정릉동</option>
            <option value='종암동'>종암동</option>
            <option value='하월곡동'>하월곡동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '송파구') {
        addressselect.innerHTML = `
            <option value='가락동'>가락동</option>
            <option value='문정동'>문정동</option>
            <option value='방이동'>방이동</option>
            <option value='삼전동'>삼전동</option>
            <option value='석촌동'>석촌동</option>
            <option value='송파동'>송파동</option>
            <option value='신천동'>신천동</option>
            <option value='오금동'>오금동</option>
            <option value='잠실동'>잠실동</option>
            <option value='장지동'>장지동</option>
            <option value='풍납동'>풍납동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '양천구') {
        addressselect.innerHTML = `
            <option value='목동'>목동</option>
            <option value='신월동'>신월동</option>
            <option value='신정동'>신정동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '영등포구') {
        addressselect.innerHTML = `
            <option value='당산동'>당산동</option>
            <option value='당산동1가'>당산동1가</option>
            <option value='당산동2가'>당산동2가</option>
            <option value='당산동3가'>당산동3가</option>
            <option value='당산동4가'>당산동4가</option>
            <option value='당산동5가'>당산동5가</option>
            <option value='당산동6가'>당산동6가</option>
            <option value='도림동'>도림동</option>
            <option value='문래동1가'>문래동1가</option>
            <option value='문래동2가'>문래동2가</option>
            <option value='문래동3가'>문래동3가</option>
            <option value='문래동4가'>문래동4가</option>
            <option value='문래동5가'>문래동5가</option>
            <option value='문래동6가'>문래동6가</option>
            <option value='양평동2가'>양평동2가</option>
            <option value='영등포동1가'>영등포동1가</option>
            <option value='영등포동2가'>영등포동2가</option>
            <option value='영등포동3가'>영등포동3가</option>
            <option value='영등포동4가'>영등포동4가</option>
            <option value='영등포동5가'>영등포동5가</option>
            <option value='영등포동6가'>영등포동6가</option>
            <option value='영등포동7가'>영등포동7가</option>
            <option value='영등포동8가'>영등포동8가</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '용산구') {
        addressselect.innerHTML = `
            <option value='갈월동'>갈월동</option>
            <option value='남영동'>남영동</option>
            <option value='도원동'>도원동</option>
            <option value='동빙고동'>동빙고동</option>
            <option value='문배동'>문배동</option>
            <option value='보광동'>보광동</option>
            <option value='서빙고동'>서빙고동</option>
            <option value='신계동'>신계동</option>
            <option value='용문동'>용문동</option>
            <option value='용산동1가'>용산동1가</option>
            <option value='용산동2가'>용산동2가</option>
            <option value='용산동3가'>용산동3가</option>
            <option value='용산동4가'>용산동4가</option>
            <option value='용산동5가'>용산동5가</option>
            <option value='용산동6가'>용산동6가</option>
            <option value='원효로2가'>원효로2가</option>
            <option value='이촌동'>이촌동</option>
            <option value='이태원동'>이태원동</option>
            <option value='주성동'>주성동</option>
            <option value='한강로1가'>한강로1가</option>
            <option value='한강로2가'>한강로2가</option>
            <option value='한강로3가'>한강로3가</option>
            <option value='한남동'>한남동</option>
            <option value='효창동'>효창동</option>
            <option value='후암동'>후암동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '은평구') {
        addressselect.innerHTML = `
            <option value='갈현동'>갈현동</option>
            <option value='구산동'>구산동</option>
            <option value='녹번동'>녹번동</option>
            <option value='불광동'>불광동</option>
            <option value='수색동'>수색동</option>
            <option value='신사동'>신사동</option>
            <option value='역촌동'>역촌동</option>
            <option value='증산동'>증산동</option>
            <option value='진관동'>진관동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '종로구') {
        addressselect.innerHTML = `
            <option value='가회동'>가회동</option>
            <option value='견지동'>견지동</option>
            <option value='경운동'>경운동</option>
            <option value='계동'>계동</option>
            <option value='공평동'>공평동</option>
            <option value='관수동'>관수동</option>
            <option value='관철동'>관철동</option>
            <option value='관훈동'>관훈동</option>
            <option value='교남동'>교남동</option>
            <option value='교북동'>교북동</option>
            <option value='구기동'>구기동</option>
            <option value='궁정동'>궁정동</option>
            <option value='권농동'>권농동</option>
            <option value='낙원동'>낙원동</option>
            <option value='내수동'>내수동</option>
            <option value='내자동'>내자동</option>
            <option value='누상동'>누상동</option>
            <option value='누하동'>누하동</option>
            <option value='당주동'>당주동</option>
            <option value='도렴동'>도렴동</option>
            <option value='돈의동'>돈의동</option>
            <option value='동숭동'>동숭동</option>
            <option value='명륜1가'>명륜1가</option>
            <option value='명륜2가'>명륜2가</option>
            <option value='명륜3가'>명륜3가</option>
            <option value='명륜4가'>명륜4가</option>
            <option value='묘동'>묘동</option>
            <option value='봉익동'>봉익동</option>
            <option value='부암동'>부암동</option>
            <option value='사간동'>사간동</option>
            <option value='사직동'>사직동</option>
            <option value='삼청동'>삼청동</option>
            <option value='서린동'>서린동</option>
            <option value='세종로'>세종로</option>
            <option value='소격동'>소격동</option>
            <option value='송월동'>송월동</option>
            <option value='송현동'>송현동</option>
            <option value='수송동'>수송동</option>
            <option value='숭인동'>숭인동</option>
            <option value='신교동'>신교동</option>
            <option value='신문로1가'>신문로1가</option>
            <option value='신문로2가'>신문로2가</option>
            <option value='안국동'>안국동</option>
            <option value='연건동'>연건동</option>
            <option value='연지동'>연지동</option>
            <option value='예지동'>예지동</option>
            <option value='옥인동'>옥인동</option>
            <option value='와룡동'>와룡동</option>
            <option value='운니동'>운니동</option>
            <option value='원남동'>원남동</option>
            <option value='원서동'>원서동</option>
            <option value='이화동'>이화동</option>
            <option value='익선동'>익선동</option>
            <option value='인사동'>인사동</option>
            <option value='인의동'>인의동</option>
            <option value='장사동'>장사동</option>
            <option value='재동'>재동</option>
            <option value='적선동'>적선동</option>
            <option value='종로1가'>종로1가</option>
            <option value='종로2가'>종로2가</option>
            <option value='종로3가'>종로3가</option>
            <option value='종로4가'>종로4가</option>
            <option value='종로5가'>종로5가</option>
            <option value='종로6가'>종로6가</option>
            <option value='중학동'>중학동</option>
            <option value='창성동'>창성동</option>
            <option value='창신동'>창신동</option>
            <option value='청운동'>청운동</option>
            <option value='청진동'>청진동</option>
            <option value='체부동'>체부동</option>
            <option value='충신동'>충신동</option>
            <option value='통의동'>통의동</option>
            <option value='통인동'>통인동</option>
            <option value='팔판동'>팔판동</option>
            <option value='평동'>평동</option>
            <option value='평창동'>평창동</option>
            <option value='필운동'>필운동</option>
            <option value='행촌동'>행촌동</option>
            <option value='혜화동'>혜화동</option>
            <option value='홍지동'>홍지동</option>
            <option value='화동'>화동</option>
            <option value='효자동'>효자동</option>
            <option value='효제동'>효제동</option>
            <option value='훈정동'>훈정동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '중구') {
        addressselect.innerHTML = `
            <option value='광희동1가'>광희동1가</option>
            <option value='광희동2가'>광희동2가</option>
            <option value='남대문로2가'>남대문로2가</option>
            <option value='남대문로3가'>남대문로3가</option>
            <option value='남대문로4가'>남대문로4가</option>
            <option value='남대문로5가'>남대문로5가</option>
            <option value='남산동1가'>남산동1가</option>
            <option value='남산동2가'>남산동2가</option>
            <option value='남산동3가'>남산동3가</option>
            <option value='남창동'>남창동</option>
            <option value='남학동'>남학동</option>
            <option value='만리동1가'>만리동1가</option>
            <option value='만리동2가'>만리동2가</option>
            <option value='명동1가'>명동1가</option>
            <option value='명동2가'>명동2가</option>
            <option value='무학동'>무학동</option>
            <option value='묵정동'>묵정동</option>
            <option value='방산동'>방산동</option>
            <option value='봉래동1가'>봉래동1가</option>
            <option value='봉래동2가'>봉래동2가</option>
            <option value='북창동'>북창동</option>
            <option value='산림동'>산림동</option>
            <option value='서소문동'>서소문동</option>
            <option value='소공동'>소공동</option>
            <option value='수표동'>수표동</option>
            <option value='수하동'>수하동</option>
            <option value='순화동'>순화동</option>
            <option value='신당동'>신당동</option>
            <option value='쌍림동'>쌍림동</option>
            <option value='예관동'>예관동</option>
            <option value='예장동'>예장동</option>
            <option value='오장동'>오장동</option>
            <option value='을지로3가'>을지로3가</option>
            <option value='을지로4가'>을지로4가</option>
            <option value='을지로5가'>을지로5가</option>
            <option value='을지로6가'>을지로6가</option>
            <option value='을지로7가'>을지로7가</option>
            <option value='의주로1가'>의주로1가</option>
            <option value='의주로2가'>의주로2가</option>
            <option value='인현동1가'>인현동1가</option>
            <option value='인현동2가'>인현동2가</option>
            <option value='입정동'>입정동</option>
            <option value='장교동'>장교동</option>
            <option value='장충동1가'>장충동1가</option>
            <option value='장충동2가'>장충동2가</option>
            <option value='저동1가'>저동1가</option>
            <option value='저동2가'>저동2가</option>
            <option value='정동'>정동</option>
            <option value='주교동'>주교동</option>
            <option value='주자동'>주자동</option>
            <option value='중림동'>중림동</option>
            <option value='초동'>초동</option>
            <option value='충무로1가'>충무로1가</option>
            <option value='충무로2가'>충무로2가</option>
            <option value='충무로3가'>충무로3가</option>
            <option value='충무로4가'>충무로4가</option>
            <option value='충무로5가'>충무로5가</option>
            <option value='충정로1가'>충정로1가</option>
            <option value='태평로1가'>태평로1가</option>
            <option value='태평로2가'>태평로2가</option>
            <option value='필동1가'>필동1가</option>
            <option value='필동2가'>필동2가</option>
            <option value='필동3가'>필동3가</option>
            <option value='황학동'>황학동</option>
            <option value='회현동1가'>회현동1가</option>
            <option value='회현동2가'>회현동2가</option>
            <option value='회현동3가'>회현동3가</option>
            <option value='흥인동'>흥인동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '중랑구') {
        addressselect.innerHTML = `
            <option value='망우동'>망우동</option>
            <option value='면목동'>면목동</option>
            <option value='묵동'>묵동</option>
            <option value='상봉동'>상봉동</option>
            <option value='신내동'>신내동</option>
            <option value='중화동'>중화동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '강서구') {
        addressselect.innerHTML = `
            <option value='대저1동'>대저1동</option>
            <option value='대저2동'>대저2동</option>
            <option value='강동동'>강동동</option>
            <option value='명지동'>명지동</option>
            <option value='죽림동'>죽림동</option>
            <option value='식만동'>식만동</option>
            <option value='죽동동'>죽동동</option>
            <option value='봉림동'>봉림동</option>
            <option value='송정동'>송정동</option>
            <option value='화전동'>화전동</option>
            <option value='녹산동'>녹산동</option>
            <option value='생곡동'>생곡동</option>
            <option value='구랑동'>구랑동</option>
            <option value='지사동'>지사동</option>
            <option value='미음동'>미음동</option>
            <option value='범방동'>범방동</option>
            <option value='신호동'>신호동</option>
            <option value='동선동'>동선동</option>
            <option value='성북동'>성북동</option>
            <option value='눌차동'>눌차동</option>
            <option value='천성동'>천성동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '금정구') {
        addressselect.innerHTML = `
            <option value='두구동'>두구동</option>
            <option value='노포동'>노포동</option>
            <option value='청룡동'>청룡동</option>
            <option value='남산동'>남산동</option>
            <option value='선동'>선동</option>
            <option value='오륜동'>오륜동</option>
            <option value='구서동'>구서동</option>
            <option value='장전동'>장전동</option>
            <option value='부곡동'>부곡동</option>
            <option value='서동'>서동</option>
            <option value='금사동'>금사동</option>
            <option value='회동동'>회동동</option>
            <option value='금성동'>금성동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '기장군') {
        addressselect.innerHTML = `
            <option value='기장읍'>기장읍</option>
            <option value='장안읍'>장안읍</option>
            <option value='정관읍'>정관읍</option>
            <option value='일광읍'>일광읍</option>
            <option value='철마면'>철마면</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '남구') {
        addressselect.innerHTML = `
            <option value='대연동'>대연동</option>
            <option value='용호동'>용호동</option>
            <option value='용당동'>용당동</option>
            <option value='문현동'>문현동</option>
            <option value='우암동'>우암동</option>
            <option value='감만동'>감만동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '동구') {
        addressselect.innerHTML = `
            <option value='초량동'>초량동</option>
            <option value='수정동'>수정동</option>
            <option value='좌천동'>좌천동</option>
            <option value='범일동'>범일동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '동래구') {
        addressselect.innerHTML = `
            <option value='명장동'>명장동</option>
            <option value='안락동'>안락동</option>
            <option value='칠산동'>칠산동</option>
            <option value='낙민동'>낙민동</option>
            <option value='복천동'>복천동</option>
            <option value='수안동'>수안동</option>
            <option value='명륜동'>명륜동</option>
            <option value='온천동'>온천동</option>
            <option value='사직동'>사직동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '부산진구') {
        addressselect.innerHTML = `
            <option value='양정동'>양정동</option>
            <option value='전포동'>전포동</option>
            <option value='부전동'>부전동</option>
            <option value='범천동'>범천동</option>
            <option value='범전동'>범전동</option>
            <option value='연지동'>연지동</option>
            <option value='초읍동'>초읍동</option>
            <option value='부암동'>부암동</option>
            <option value='당감동'>당감동</option>
            <option value='가야동'>가야동</option>
            <option value='개금동'>개금동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '북구') {
        addressselect.innerHTML = `
            <option value='금곡동'>금곡동</option>
            <option value='화명동'>화명동</option>
            <option value='만덕동'>만덕동</option>
            <option value='덕천동'>덕천동</option>
            <option value='구포동'>구포동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '사상구') {
        addressselect.innerHTML = `
            <option value='삼락동'>삼락동</option>
            <option value='모라동'>모라동</option>
            <option value='덕포동'>덕포동</option>
            <option value='괘법동'>괘법동</option>
            <option value='감전동'>감전동</option>
            <option value='주례동'>주례동</option>
            <option value='학장동'>학장동</option>
            <option value='엄궁동'>엄궁동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '사하구') {
        addressselect.innerHTML = `
            <option value='괴정동'>괴정동</option>
            <option value='당리동'>당리동</option>
            <option value='하단동'>하단동</option>
            <option value='신평동'>신평동</option>
            <option value='장림동'>장림동</option>
            <option value='다대동'>다대동</option>
            <option value='구평동'>구평동</option>
            <option value='감천동'>감천동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '서구') {
        addressselect.innerHTML = `
            <option value='동대신동1가'>동대신동1가</option>
            <option value='동대신동2가'>동대신동2가</option>
            <option value='동대신동3가'>동대신동3가</option>
            <option value='서대신동1가'>서대신동1가</option>
            <option value='서대신동2가'>서대신동2가</option>
            <option value='서대신동3가'>서대신동3가</option>
            <option value='부용동1가'>부용동1가</option>
            <option value='부용동2가'>부용동2가</option>
            <option value='부민동1가'>부민동1가</option>
            <option value='부민동2가'>부민동2가</option>
            <option value='부민동3가'>부민동3가</option>
            <option value='토성동1가'>토성동1가</option>
            <option value='토성동2가'>토성동2가</option>
            <option value='토성동3가'>토성동3가</option>
            <option value='아미동1가'>아미동1가</option>
            <option value='아미동2가'>아미동2가</option>
            <option value='토성동4가'>토성동4가</option>
            <option value='토성동5가'>토성동5가</option>
            <option value='초장동'>초장동</option>
            <option value='충무동1가'>충무동1가</option>
            <option value='충무동2가'>충무동2가</option>
            <option value='충무동3가'>충무동3가</option>
            <option value='남부민동'>남부민동</option>
            <option value='암남동'>암남동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '수영구') {
        addressselect.innerHTML = `
            <option value='망미동'>망미동</option>
            <option value='수영동'>수영동</option>
            <option value='민락동'>민락동</option>
            <option value='광안동'>광안동</option>
            <option value='남천동'>남천동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '연제구') {
        addressselect.innerHTML = `
            <option value='거제동'>거제동</option>
            <option value='연산동'>연산동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '영도구') {
        addressselect.innerHTML = `
            <option value='대교동1가'>대교동1가</option>
            <option value='대교동2가'>대교동2가</option>
            <option value='대평동1가'>대평동1가</option>
            <option value='대평동2가'>대평동2가</option>
            <option value='남항동1가'>남항동1가</option>
            <option value='남항동2가'>남항동2가</option>
            <option value='남항동3가'>남항동3가</option>
            <option value='영선동1가'>영선동1가</option>
            <option value='영선동2가'>영선동2가</option>
            <option value='영선동3가'>영선동3가</option>
            <option value='영선동4가'>영선동4가</option>
            <option value='신선동1가'>신선동1가</option>
            <option value='신선동2가'>신선동2가</option>
            <option value='신선동3가'>신선동3가</option>
            <option value='봉래동1가'>봉래동1가</option>
            <option value='봉래동2가'>봉래동2가</option>
            <option value='봉래동3가'>봉래동3가</option>
            <option value='봉래동4가'>봉래동4가</option>
            <option value='봉래동5가'>봉래동5가</option>
            <option value='청학동'>청학동</option>
            <option value='동삼동'>동삼동</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '중구') {
        addressselect.innerHTML = `
            <option value='영주동'>영주동</option>
            <option value='대창동1가'>대창동1가</option>
            <option value='대창동2가'>대창동2가</option>
            <option value='중앙동1가'>중앙동1가</option>
            <option value='중앙동2가'>중앙동2가</option>
            <option value='중앙동3가'>중앙동3가</option>
            <option value='중앙동4가'>중앙동4가</option>
            <option value='중앙동5가'>중앙동5가</option>
            <option value='중앙동6가'>중앙동6가</option>
            <option value='중앙동7가'>중앙동7가</option>
            <option value='동광동1가'>동광동1가</option>
            <option value='동광동2가'>동광동2가</option>
            <option value='동광동3가'>동광동3가</option>
            <option value='동광동4가'>동광동4가</option>
            <option value='동광동5가'>동광동5가</option>
            <option value='대청동1가'>대청동1가</option>
            <option value='대청동2가'>대청동2가</option>
            <option value='대청동3가'>대청동3가</option>
            <option value='대청동4가'>대청동4가</option>
            <option value='보수동1가'>보수동1가</option>
            <option value='보수동2가'>보수동2가</option>
            <option value='보수동3가'>보수동3가</option>
            <option value='부평동1가'>부평동1가</option>
            <option value='부평동2가'>부평동2가</option>
            <option value='부평동3가'>부평동3가</option>
            <option value='부평동4가'>부평동4가</option>
            <option value='신창동1가'>신창동1가</option>
            <option value='신창동2가'>신창동2가</option>
            <option value='신창동3가'>신창동3가</option>
            <option value='신창동4가'>신창동4가</option>
            <option value='창선동1가'>창선동1가</option>
            <option value='창선동2가'>창선동2가</option>
            <option value='광복동1가'>광복동1가</option>
            <option value='광복동2가'>광복동2가</option>
            <option value='광복동3가'>광복동3가</option>
            <option value='남포동1가'>남포동1가</option>
            <option value='남포동2가'>남포동2가</option>
            <option value='남포동3가'>남포동3가</option>
            <option value='남포동4가'>남포동4가</option>
            <option value='남포동5가'>남포동5가</option>
            <option value='남포동6가'>남포동6가</option>
        `;
    }
    else if (citySelect.value=== '부산시' && districtSelect.value === '해운대구') {
        addressselect.innerHTML = `
            <option value='반송동'>반송동</option>
            <option value='석대동'>석대동</option>
            <option value='반여동'>반여동</option>
            <option value='재송동'>재송동</option>
            <option value='우동'>우동</option>
            <option value='중동'>중동</option>
            <option value='좌동'>좌동</option>
            <option value='송정동'>송정동</option>
        `;
    }else if (citySelect.value=== '대구시' && districtSelect.value === "중구") {
        addressselect.innerHTML = `
            <option value="동인동1가">동인동1가</option>
            <option value="동인동2가">동인동2가</option>
            <option value="동인동3가">동인동3가</option>
            <option value="동인동4가">동인동4가</option>
            <option value="삼덕동1가">삼덕동1가</option>
            <option value="삼덕동2가">삼덕동2가</option>
            <option value="삼덕동3가">삼덕동3가</option>
            <option value="봉산동">봉산동</option>
            <option value="장관동">장관동</option>
            <option value="상서동">상서동</option>
            <option value="수동">수동</option>
            <option value="덕산동">덕산동</option>
            <option value="종로1가">종로1가</option>
            <option value="종로2가">종로2가</option>
            <option value="사일동">사일동</option>
            <option value="동일동">동일동</option>
            <option value="남일동">남일동</option>
            <option value="전동">전동</option>
            <option value="동성로3가">동성로3가</option>
            <option value="동문동">동문동</option>
            <option value="서야동">서야동</option>
            <option value="서성로1가">서성로1가</option>
            <option value="시장북로">시장북로</option>
            <option value="하서동">하서동</option>
            <option value="남성로">남성로</option>
            <option value="계산동1가">계산동1가</option>
            <option value="계산동2가">계산동2가</option>
            <option value="동산동">동산동</option>
            <option value="서문로2가">서문로2가</option>
            <option value="서성로2가">서성로2가</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "동구") {
        addressselect.innerHTML = `
            <option value="내곡동">내곡동</option>
            <option value="능성동">능성동</option>
            <option value="진인동">진인동</option>
            <option value="도학동">도학동</option>
            <option value="백안동">백안동</option>
            <option value="미곡동">미곡동</option>
            <option value="용수동">용수동</option>
            <option value="신무동">신무동</option>
            <option value="미대동">미대동</option>
            <option value="내동">내동</option>
            <option value="신용동">신용동</option>
            <option value="중대동">중대동</option>
            <option value="송정동">송정동</option>
            <option value="덕곡동">덕곡동</option>
            <option value="지묘동">지묘동</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "서구") {
        addressselect.innerHTML = `
            <option value="내당동">내당동</option>
            <option value="비산동">비산동</option>
            <option value="평리동">평리동</option>
            <option value="상리동">상리동</option>
            <option value="중리동">중리동</option>
            <option value="이현동">이현동</option>
            <option value="원대동1가">원대동1가</option>
            <option value="원대동2가">원대동2가</option>
            <option value="원대동3가">원대동3가</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "남구") {
        addressselect.innerHTML = `
            <option value="이천동">이천동</option>
            <option value="봉덕동">봉덕동</option>
            <option value="대명동">대명동</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "북구") {
        addressselect.innerHTML = `
            <option value="칠성동1가">칠성동1가</option>
            <option value="칠성동2가">칠성동2가</option>
            <option value="고성동1가">고성동1가</option>
            <option value="고성동2가">고성동2가</option>
            <option value="고성동3가">고성동3가</option>
            <option value="침산동">침산동</option>
            <option value="노원동1가">노원동1가</option>
            <option value="노원동2가">노원동2가</option>
            <option value="노원동3가">노원동3가</option>
            <option value="대현동">대현동</option>
            <option value="산격동">산격동</option>
            <option value="복현동">복현동</option>
            <option value="검단동">검단동</option>
            <option value="동변동">동변동</option>
            <option value="서변동">서변동</option>
            <option value="조야동">조야동</option>
            <option value="노곡동">노곡동</option>
            <option value="읍내동">읍내동</option>
            <option value="동호동">동호동</option>
            <option value="학정동">학정동</option>
            <option value="도남동">도남동</option>
            <option value="국우동">국우동</option>
            <option value="구암동">구암동</option>
            <option value="동천동">동천동</option>
            <option value="관음동">관음동</option>
            <option value="태전동">태전동</option>
            <option value="매천동">매천동</option>
            <option value="팔달동">팔달동</option>
            <option value="금호동">금호동</option>
            <option value="사수동">사수동</option>
            <option value="연경동">연경동</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "수성구") {
        addressselect.innerHTML = `
            <option value="범어동">범어동</option>
            <option value="만촌동">만촌동</option>
            <option value="수성동1가">수성동1가</option>
            <option value="수성동2가">수성동2가</option>
            <option value="수성동3가">수성동3가</option>
            <option value="수성동4가">수성동4가</option>
            <option value="황금동">황금동</option>
            <option value="중동">중동</option>
            <option value="상동">상동</option>
            <option value="파동">파동</option>
            <option value="두산동">두산동</option>
            <option value="지산동">지산동</option>
            <option value="범물동">범물동</option>
            <option value="시지동">시지동</option>
            <option value="매호동">매호동</option>
            <option value="성동">성동</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "달서구") {
        addressselect.innerHTML = `
            <option value="파호동">파호동</option>
            <option value="호림동">호림동</option>
            <option value="갈산동">갈산동</option>
            <option value="신당동">신당동</option>
            <option value="이곡동">이곡동</option>
            <option value="장동">장동</option>
            <option value="장기동">장기동</option>
            <option value="용산동">용산동</option>
            <option value="죽전동">죽전동</option>
            <option value="감삼동">감삼동</option>
            <option value="본리동">본리동</option>
            <option value="상인동">상인동</option>
            <option value="도원동">도원동</option>
            <option value="진천동">진천동</option>
            <option value="유천동">유천동</option>
            <option value="대천동">대천동</option>
            <option value="월성동">월성동</option>
            <option value="월암동">월암동</option>
            <option value="송현동">송현동</option>
            <option value="대곡동">대곡동</option>
            <option value="본동">본동</option>
            <option value="호산동">호산동</option>
        `;
    }

    else if (citySelect.value=== '대구시' && districtSelect.value === "달성군") {
        addressselect.innerHTML = `
            <option value="화원읍">화원읍</option>
            <option value="유가읍">유가읍</option>
            <option value="옥포읍">옥포읍</option>
            <option value="현풍읍">현풍읍</option>
            <option value="가창면">가창면</option>
            <option value="하빈면">하빈면</option>
            <option value="구지면">구지면</option>
        `;
    }else if (citySelect.value=== '인천시' && districtSelect.value === '강화군') {
        addressselect.innerHTML = `
            <option value='강화읍'>강화읍</option>
            <option value='선원면'>선원면</option>
            <option value='불은면'>불은면</option>
            <option value='길상면'>길상면</option>
            <option value='화도면'>화도면</option>
            <option value='양도면'>양도면</option>
            <option value='내가면'>내가면</option>
            <option value='하점면'>하점면</option>
            <option value='교동면'>교동면</option>
            <option value='삼산면'>삼산면</option>
            <option value='서도면'>서도면</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '계양구') {
        addressselect.innerHTML = `
            <option value='효성동'>효성동</option>
            <option value='계산동'>계산동</option>
            <option value='작전동'>작전동</option>
            <option value='서운동'>서운동</option>
            <option value='임학동'>임학동</option>
            <option value='용종동'>용종동</option>
            <option value='병방동'>병방동</option>
            <option value='방축동'>방축동</option>
            <option value='박촌동'>박촌동</option>
            <option value='동양동'>동양동</option>
            <option value='귤현동'>귤현동</option>
            <option value='상야동'>상야동</option>
            <option value='하야동'>하야동</option>
            <option value='평동'>평동</option>
            <option value='노오지동'>노오지동</option>
            <option value='선주지동'>선주지동</option>
            <option value='이화동'>이화동</option>
            <option value='오류동'>오류동</option>
            <option value='갈현동'>갈현동</option>
            <option value='둑실동'>둑실동</option>
            <option value='목상동'>목상동</option>
            <option value='다남동'>다남동</option>
            <option value='장기동'>장기동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '남동구') {
        addressselect.innerHTML = `
            <option value='남촌동'>남촌동</option>
            <option value='수산동'>수산동</option>
            <option value='도림동'>도림동</option>
            <option value='논현동'>논현동</option>
            <option value='고잔동'>고잔동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '동구') {
        addressselect.innerHTML = `
            <option value='만석동'>만석동</option>
            <option value='화수동'>화수동</option>
            <option value='송현동'>송현동</option>
            <option value='화평동'>화평동</option>
            <option value='창영동'>창영동</option>
            <option value='금곡동'>금곡동</option>
            <option value='송림동'>송림동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '미추홀구') {
        addressselect.innerHTML = `
            <option value='관교동'>관교동</option>
            <option value='도화동'>도화동</option>
            <option value='문학동'>문학동</option>
            <option value='숭의동'>숭의동</option>
            <option value='용현동'>용현동</option>
            <option value='주안동'>주안동</option>
            <option value='학익동'>학익동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '부평구') {
        addressselect.innerHTML = `
            <option value='부평동'>부평동</option>
            <option value='삼산동'>삼산동</option>
            <option value='갈산동'>갈산동</option>
            <option value='부개동'>부개동</option>
            <option value='일신동'>일신동</option>
            <option value='구산동'>구산동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '서구') {
        addressselect.innerHTML = `
            <option value='백석동'>백석동</option>
            <option value='시천동'>시천동</option>
            <option value='검암동'>검암동</option>
            <option value='경서동'>경서동</option>
            <option value='공촌동'>공촌동</option>
            <option value='연희동'>연희동</option>
            <option value='심곡동'>심곡동</option>
            <option value='가정동'>가정동</option>
            <option value='신현동'>신현동</option>
            <option value='석남동'>석남동</option>
            <option value='원창동'>원창동</option>
            <option value='가좌동'>가좌동</option>
            <option value='마전동'>마전동</option>
            <option value='당하동'>당하동</option>
            <option value='원당동'>원당동</option>
            <option value='대곡동'>대곡동</option>
            <option value='금곡동'>금곡동</option>
            <option value='오류동'>오류동</option>
            <option value='왕길동'>왕길동</option>
            <option value='불로동'>불로동</option>
            <option value='청라동'>청라동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '연수구') {
        addressselect.innerHTML = `
            <option value='동춘동'>동춘동</option>
            <option value='선학동'>선학동</option>
            <option value='송도동'>송도동</option>
            <option value='연수동'>연수동</option>
            <option value='옥련동'>옥련동</option>
            <option value='청학동'>청학동</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '옹진군') {
        addressselect.innerHTML = `
            <option value='덕적면'>덕적면</option>
            <option value='영흥면'>영흥면</option>
            <option value='자월면'>자월면</option>
            <option value='연평면'>연평면</option>
        `;
    }
    else if (citySelect.value=== '인천시' && districtSelect.value === '중구') {
        addressselect.innerHTML = `
            <option value='중앙동4가'>중앙동4가</option>
            <option value='해안동1가'>해안동1가</option>
            <option value='해안동2가'>해안동2가</option>
            <option value='해안동3가'>해안동3가</option>
            <option value='해안동4가'>해안동4가</option>
            <option value='관동1가'>관동1가</option>
            <option value='관동2가'>관동2가</option>
            <option value='관동3가'>관동3가</option>
            <option value='항동1가'>항동1가</option>
            <option value='항동2가'>항동2가</option>
            <option value='항동3가'>항동3가</option>
            <option value='항동4가'>항동4가</option>
            <option value='항동5가'>항동5가</option>
            <option value='항동6가'>항동6가</option>
            <option value='항동7가'>항동7가</option>
            <option value='송학동1가'>송학동1가</option>
            <option value='송학동2가'>송학동2가</option>
            <option value='송학동3가'>송학동3가</option>
            <option value='사동'>사동</option>
            <option value='신생동'>신생동</option>
            <option value='신포동'>신포동</option>
            <option value='답동'>답동</option>
            <option value='신흥동1가'>신흥동1가</option>
            <option value='신흥동2가'>신흥동2가</option>
            <option value='신흥동3가'>신흥동3가</option>
            <option value='선화동'>선화동</option>
            <option value='유동'>유동</option>
            <option value='율목동'>율목동</option>
            <option value='도원동'>도원동</option>
            <option value='내동'>내동</option>
            <option value='경동'>경동</option>
            <option value='용동'>용동</option>
            <option value='인현동'>인현동</option>
            <option value='전동'>전동</option>
            <option value='북성동1가'>북성동1가</option>
            <option value='북성동2가'>북성동2가</option>
            <option value='북성동3가'>북성동3가</option>
            <option value='선린동'>선린동</option>
            <option value='송월동1가'>송월동1가</option>
            <option value='송월동2가'>송월동2가</option>
            <option value='송월동3가'>송월동3가</option>
            <option value='중산동'>중산동</option>
            <option value='운남동'>운남동</option>
            <option value='운서동'>운서동</option>
            <option value='운북동'>운북동</option>
            <option value='을왕동'>을왕동</option>
            <option value='남북동'>남북동</option>
            <option value='덕교동'>덕교동</option>
            <option value='무의동'>무의동</option>
        `;
    }else if (citySelect.value=== '광주시' && districtSelect.value === '광산구') {
        addressselect.innerHTML = `
            <option value='고룡동'>고룡동</option>
            <option value='광산동'>광산동</option>
            <option value='남산동'>남산동</option>
            <option value='내산동'>내산동</option>
            <option value='대산동'>대산동</option>
            <option value='덕림동'>덕림동</option>
            <option value='도덕동'>도덕동</option>
            <option value='도산동'>도산동</option>
            <option value='도천동'>도천동</option>
            <option value='도호동'>도호동</option>
            <option value='동림동'>동림동</option>
            <option value='동산동'>동산동</option>
            <option value='동호동'>동호동</option>
            <option value='두정동'>두정동</option>
            <option value='등임동'>등임동</option>
            <option value='명도동'>명도동</option>
            <option value='명화동'>명화동</option>
            <option value='박호동'>박호동</option>
            <option value='복룡동'>복룡동</option>
            <option value='본덕동'>본덕동</option>
            <option value='북산동'>북산동</option>
            <option value='비아동'>비아동</option>
            <option value='사호동'>사호동</option>
            <option value='산막동'>산막동</option>
            <option value='산수동'>산수동</option>
            <option value='산월동'>산월동</option>
            <option value='산정동'>산정동</option>
            <option value='삼거동'>삼거동</option>
            <option value='삼도동'>삼도동</option>
            <option value='서봉동'>서봉동</option>
            <option value='선동'>선동</option>
            <option value='선암동'>선암동</option>
            <option value='소촌동'>소촌동</option>
            <option value='송대동'>송대동</option>
            <option value='송산동'>송산동</option>
            <option value='송정동'>송정동</option>
            <option value='송촌동'>송촌동</option>
            <option value='송치동'>송치동</option>
            <option value='송학동'>송학동</option>
            <option value='수완동'>수완동</option>
            <option value='신가동'>신가동</option>
            <option value='신동'>신동</option>
            <option value='신룡동'>신룡동</option>
            <option value='신창동'>신창동</option>
            <option value='신촌동'>신촌동</option>
            <option value='쌍암동'>쌍암동</option>
            <option value='안청동'>안청동</option>
            <option value='양동'>양동</option>
            <option value='양산동'>양산동</option>
            <option value='연산동'>연산동</option>
            <option value='오산동'>오산동</option>
            <option value='오선동'>오선동</option>
            <option value='오운동'>오운동</option>
            <option value='옥동'>옥동</option>
            <option value='왕동'>왕동</option>
            <option value='요기동'>요기동</option>
            <option value='용곡동'>용곡동</option>
            <option value='용동'>용동</option>
            <option value='용봉동'>용봉동</option>
            <option value='우산동'>우산동</option>
            <option value='운남동'>운남동</option>
            <option value='운수동'>운수동</option>
            <option value='월계동'>월계동</option>
            <option value='월곡동'>월곡동</option>
            <option value='월전동'>월전동</option>
            <option value='유계동'>유계동</option>
            <option value='임곡동'>임곡동</option>
            <option value='장덕동'>장덕동</option>
            <option value='장록동'>장록동</option>
            <option value='장수동'>장수동</option>
            <option value='지산동'>지산동</option>
            <option value='지정동'>지정동</option>
            <option value='지죽동'>지죽동</option>
            <option value='지평동'>지평동</option>
            <option value='진곡동'>진곡동</option>
            <option value='하남동'>하남동</option>
            <option value='하산동'>하산동</option>
            <option value='황룡동'>황룡동</option>
            <option value='흑석동'>흑석동</option>
        `;
    }
    else if (citySelect.value=== '광주시' && districtSelect.value === '남구') {
        addressselect.innerHTML = `
            <option value='구동'>구동</option>
            <option value='구소동'>구소동</option>
            <option value='노대동'>노대동</option>
            <option value='대지동'>대지동</option>
            <option value='덕남동'>덕남동</option>
            <option value='도금동'>도금동</option>
            <option value='방림동'>방림동</option>
            <option value='백운동'>백운동</option>
            <option value='봉선동'>봉선동</option>
            <option value='사동'>사동</option>
            <option value='서동'>서동</option>
            <option value='송하동'>송하동</option>
            <option value='승촌동'>승촌동</option>
            <option value='신장동'>신장동</option>
            <option value='압촌동'>압촌동</option>
            <option value='양과동'>양과동</option>
            <option value='양림동'>양림동</option>
            <option value='양촌동'>양촌동</option>
            <option value='원산동'>원산동</option>
            <option value='월산동'>월산동</option>
            <option value='월성동'>월성동</option>
            <option value='이장동'>이장동</option>
            <option value='임암동'>임암동</option>
            <option value='주월동'>주월동</option>
            <option value='지석동'>지석동</option>
            <option value='진월동'>진월동</option>
            <option value='칠석동'>칠석동</option>
            <option value='행암동'>행암동</option>
            <option value='화장동'>화장동</option>
        `;
    }
    else if (citySelect.value=== '광주시' && districtSelect.value === '동구') {
        addressselect.innerHTML = `
            <option value='계림동'>계림동</option>
            <option value='광산동'>광산동</option>
            <option value='궁동'>궁동</option>
            <option value='금남로1가'>금남로1가</option>
            <option value='금남로2가'>금남로2가</option>
            <option value='금남로3가'>금남로3가</option>
            <option value='금남로4가'>금남로4가</option>
            <option value='금남로5가'>금남로5가</option>
            <option value='금동'>금동</option>
            <option value='남동'>남동</option>
            <option value='내남동'>내남동</option>
            <option value='대의동'>대의동</option>
            <option value='대인동'>대인동</option>
            <option value='동명동'>동명동</option>
            <option value='불로동'>불로동</option>
            <option value='산수동'>산수동</option>
            <option value='서석동'>서석동</option>
            <option value='선교동'>선교동</option>
            <option value='소태동'>소태동</option>
            <option value='수기동'>수기동</option>
            <option value='용산동'>용산동</option>
            <option value='용연동'>용연동</option>
            <option value='운림동'>운림동</option>
            <option value='월남동'>월남동</option>
            <option value='장동'>장동</option>
            <option value='지산동'>지산동</option>
            <option value='충장로1가'>충장로1가</option>
            <option value='충장로2가'>충장로2가</option>
            <option value='충장로3가'>충장로3가</option>
            <option value='충장로4가'>충장로4가</option>
            <option value='충장로5가'>충장로5가</option>
            <option value='학동'>학동</option>
            <option value='호남동'>호남동</option>
            <option value='황금동'>황금동</option>
        `;
    }
    else if (citySelect.value=== '광주시' && districtSelect.value === '북구') {
        addressselect.innerHTML = `
            <option value='각화동'>각화동</option>
            <option value='금곡동'>금곡동</option>
            <option value='누문동'>누문동</option>
            <option value='대촌동'>대촌동</option>
            <option value='덕의동'>덕의동</option>
            <option value='동림동'>동림동</option>
            <option value='두암동'>두암동</option>
            <option value='망월동'>망월동</option>
            <option value='매곡동'>매곡동</option>
            <option value='문흥동'>문흥동</option>
            <option value='본촌동'>본촌동</option>
            <option value='북동'>북동</option>
            <option value='삼각동'>삼각동</option>
            <option value='생용동'>생용동</option>
            <option value='수곡동'>수곡동</option>
            <option value='신안동'>신안동</option>
            <option value='신용동'>신용동</option>
            <option value='양산동'>양산동</option>
            <option value='연제동'>연제동</option>
            <option value='오룡동'>오룡동</option>
            <option value='오치동'>오치동</option>
            <option value='용강동'>용강동</option>
            <option value='용두동'>용두동</option>
            <option value='용봉동'>용봉동</option>
            <option value='용전동'>용전동</option>
            <option value='우산동'>우산동</option>
            <option value='운암동'>운암동</option>
            <option value='운정동'>운정동</option>
            <option value='월출동'>월출동</option>
            <option value='유동'>유동</option>
            <option value='일곡동'>일곡동</option>
            <option value='임동'>임동</option>
            <option value='장등동'>장등동</option>
            <option value='중흥동'>중흥동</option>
            <option value='지야동'>지야동</option>
            <option value='청풍동'>청풍동</option>
            <option value='충효동'>충효동</option>
            <option value='태령동'>태령동</option>
            <option value='풍향동'>풍향동</option>
            <option value='화암동'>화암동</option>
            <option value='효령동'>효령동</option>
        `;
    }
    else if (citySelect.value=== '광주시' && districtSelect.value === '서구') {
        addressselect.innerHTML = `
            <option value='광천동'>광천동</option>
            <option value='금호동'>금호동</option>
            <option value='내방동'>내방동</option>
            <option value='농성동'>농성동</option>
            <option value='덕흥동'>덕흥동</option>
            <option value='동천동'>동천동</option>
            <option value='마륵동'>마륵동</option>
            <option value='매월동'>매월동</option>
            <option value='벽진동'>벽진동</option>
            <option value='서창동'>서창동</option>
            <option value='세하동'>세하동</option>
            <option value='쌍촌동'>쌍촌동</option>
            <option value='양동'>양동</option>
            <option value='용두동'>용두동</option>
            <option value='유촌동'>유촌동</option>
            <option value='치평동'>치평동</option>
            <option value='풍암동'>풍암동</option>
            <option value='화정동'>화정동</option>
        `;
    }else if (citySelect.value=== '대전시' && districtSelect.value === '대덕구') {
        addressselect.innerHTML = `
            <option value='갈전동'>갈전동</option>
            <option value='대화동'>대화동</option>
            <option value='덕암동'>덕암동</option>
            <option value='목상동'>목상동</option>
            <option value='문평동'>문평동</option>
            <option value='미호동'>미호동</option>
            <option value='법동'>법동</option>
            <option value='부수동'>부수동</option>
            <option value='비래동'>비래동</option>
            <option value='삼정동'>삼정동</option>
            <option value='상서동'>상서동</option>
            <option value='석봉동'>석봉동</option>
            <option value='송촌동'>송촌동</option>
            <option value='신대동'>신대동</option>
            <option value='신일동'>신일동</option>
            <option value='신탄진동'>신탄진동</option>
            <option value='연축동'>연축동</option>
            <option value='오정동'>오정동</option>
            <option value='와동'>와동</option>
            <option value='용호동'>용호동</option>
            <option value='읍내동'>읍내동</option>
            <option value='이현동'>이현동</option>
            <option value='장동'>장동</option>
            <option value='중리동'>중리동</option>
            <option value='평촌동'>평촌동</option>
            <option value='황호동'>황호동</option>
        `;
    }
    else if (citySelect.value=== '대전시' && districtSelect.value === '동구') {
        addressselect.innerHTML = `
            <option value='가양동'>가양동</option>
            <option value='가오동'>가오동</option>
            <option value='구도동'>구도동</option>
            <option value='낭월동'>낭월동</option>
            <option value='내탑동'>내탑동</option>
            <option value='대동'>대동</option>
            <option value='대별동'>대별동</option>
            <option value='대성동'>대성동</option>
            <option value='마산동'>마산동</option>
            <option value='비룡동'>비룡동</option>
            <option value='사성동'>사성동</option>
            <option value='삼괴동'>삼괴동</option>
            <option value='삼성동'>삼성동</option>
            <option value='삼정동'>삼정동</option>
            <option value='상소동'>상소동</option>
            <option value='성남동'>성남동</option>
            <option value='세천동'>세천동</option>
            <option value='소제동'>소제동</option>
            <option value='소호동'>소호동</option>
            <option value='신상동'>신상동</option>
            <option value='신안동'>신안동</option>
            <option value='신촌동'>신촌동</option>
            <option value='신하동'>신하동</option>
            <option value='신흥동'>신흥동</option>
            <option value='오동'>오동</option>
            <option value='용계동'>용계동</option>
            <option value='용운동'>용운동</option>
            <option value='용전동'>용전동</option>
            <option value='원동'>원동</option>
            <option value='이사동'>이사동</option>
            <option value='인동'>인동</option>
            <option value='자양동'>자양동</option>
            <option value='장척동'>장척동</option>
            <option value='정동'>정동</option>
            <option value='주산동'>주산동</option>
            <option value='주촌동'>주촌동</option>
            <option value='중동'>중동</option>
            <option value='직동'>직동</option>
            <option value='천동'>천동</option>
            <option value='추동'>추동</option>
            <option value='판암동'>판암동</option>
            <option value='하소동'>하소동</option>
            <option value='홍도동'>홍도동</option>
            <option value='효동'>효동</option>
            <option value='효평동'>효평동</option>
        `;
    }
    else if (citySelect.value=== '대전시' && districtSelect.value === '서구') {
        addressselect.innerHTML = `
            <option value='가수원동'>가수원동</option>
            <option value='가장동'>가장동</option>
            <option value='갈마동'>갈마동</option>
            <option value='관저동'>관저동</option>
            <option value='괴곡동'>괴곡동</option>
            <option value='내동'>내동</option>
            <option value='도마동'>도마동</option>
            <option value='도안동'>도안동</option>
            <option value='둔산동'>둔산동</option>
            <option value='만년동'>만년동</option>
            <option value='매노동'>매노동</option>
            <option value='변동'>변동</option>
            <option value='복수동'>복수동</option>
            <option value='봉곡동'>봉곡동</option>
            <option value='산직동'>산직동</option>
            <option value='오동'>오동</option>
            <option value='용문동'>용문동</option>
            <option value='용촌동'>용촌동</option>
            <option value='우명동'>우명동</option>
            <option value='원정동'>원정동</option>
            <option value='월평동'>월평동</option>
            <option value='장안동'>장안동</option>
            <option value='정림동'>정림동</option>
            <option value='탄방동'>탄방동</option>
            <option value='평촌동'>평촌동</option>
            <option value='흑석동'>흑석동</option>
        `;
    }
    else if (citySelect.value=== '대전시' && districtSelect.value === '유성구') {
        addressselect.innerHTML = `
            <option value='가정동'>가정동</option>
            <option value='갑동'>갑동</option>
            <option value='계산동'>계산동</option>
            <option value='관평동'>관평동</option>
            <option value='교촌동'>교촌동</option>
            <option value='구룡동'>구룡동</option>
            <option value='구성동'>구성동</option>
            <option value='구암동'>구암동</option>
            <option value='궁동'>궁동</option>
            <option value='금고동'>금고동</option>
            <option value='금탄동'>금탄동</option>
            <option value='노은동'>노은동</option>
            <option value='대동'>대동</option>
            <option value='대정동'>대정동</option>
            <option value='덕명동'>덕명동</option>
            <option value='덕진동'>덕진동</option>
            <option value='도룡동'>도룡동</option>
            <option value='둔곡동'>둔곡동</option>
            <option value='문지동'>문지동</option>
            <option value='반석동'>반석동</option>
            <option value='방동'>방동</option>
            <option value='방현동'>방현동</option>
            <option value='복용동'>복용동</option>
            <option value='봉명동'>봉명동</option>
            <option value='봉산동'>봉산동</option>
            <option value='상대동'>상대동</option>
            <option value='성북동'>성북동</option>
            <option value='세동'>세동</option>
            <option value='송강동'>송강동</option>
            <option value='송정동'>송정동</option>
            <option value='수남동'>수남동</option>
            <option value='신동'>신동</option>
            <option value='신봉동'>신봉동</option>
            <option value='신성동'>신성동</option>
            <option value='안산동'>안산동</option>
            <option value='어은동'>어은동</option>
            <option value='외삼동'>외삼동</option>
            <option value='용계동'>용계동</option>
            <option value='용산동'>용산동</option>
            <option value='원내동'>원내동</option>
            <option value='원신흥동'>원신흥동</option>
            <option value='원촌동'>원촌동</option>
            <option value='자운동'>자운동</option>
            <option value='장대동'>장대동</option>
            <option value='장동'>장동</option>
            <option value='전민동'>전민동</option>
            <option value='죽동'>죽동</option>
            <option value='지족동'>지족동</option>
            <option value='추목동'>추목동</option>
            <option value='탑립동'>탑립동</option>
            <option value='하기동'>하기동</option>
            <option value='학하동'>학하동</option>
            <option value='화암동'>화암동</option>
        `;
    }
    else if (citySelect.value=== '대전시' && districtSelect.value === '중구') {
        addressselect.innerHTML = `
            <option value='구완동'>구완동</option>
            <option value='금동'>금동</option>
            <option value='대사동'>대사동</option>
            <option value='대흥동'>대흥동</option>
            <option value='목달동'>목달동</option>
            <option value='목동'>목동</option>
            <option value='무수동'>무수동</option>
            <option value='문창동'>문창동</option>
            <option value='문화동'>문화동</option>
            <option value='부사동'>부사동</option>
            <option value='사정동'>사정동</option>
            <option value='산성동'>산성동</option>
            <option value='석교동'>석교동</option>
            <option value='선화동'>선화동</option>
            <option value='안영동'>안영동</option>
            <option value='어남동'>어남동</option>
            <option value='오류동'>오류동</option>
            <option value='옥계동'>옥계동</option>
            <option value='용두동'>용두동</option>
            <option value='유천동'>유천동</option>
            <option value='은행동'>은행동</option>
            <option value='정생동'>정생동</option>
            <option value='중촌동'>중촌동</option>
            <option value='침산동'>침산동</option>
            <option value='태평동'>태평동</option>
            <option value='호동'>호동</option>
        `;
    }else if (citySelect.value=== '울산시' && districtSelect.value === '남구') {
        addressselect.innerHTML = `
            <option value='고사동'>고사동</option>
            <option value='남화동'>남화동</option>
            <option value='달동'>달동</option>
            <option value='두왕동'>두왕동</option>
            <option value='매암동'>매암동</option>
            <option value='무거동'>무거동</option>
            <option value='부곡동'>부곡동</option>
            <option value='삼산동'>삼산동</option>
            <option value='상개동'>상개동</option>
            <option value='선암동'>선암동</option>
            <option value='성암동'>성암동</option>
            <option value='신정동'>신정동</option>
            <option value='야음동'>야음동</option>
            <option value='여천동'>여천동</option>
            <option value='옥동'>옥동</option>
            <option value='용연동'>용연동</option>
            <option value='용잠동'>용잠동</option>
            <option value='장생포동'>장생포동</option>
            <option value='황성동'>황성동</option>
        `;
    }
    else if (citySelect.value=== '울산시' && districtSelect.value === '동구') {
        addressselect.innerHTML = `
            <option value='동부동'>동부동</option>
            <option value='미포동'>미포동</option>
            <option value='방어동'>방어동</option>
            <option value='일산동'>일산동</option>
            <option value='주전동'>주전동</option>
            <option value='화정동'>화정동</option>
        `;
    }
    else if (citySelect.value=== '울산시' && districtSelect.value === '북구') {
        addressselect.innerHTML = `
            <option value='구유동'>구유동</option>
            <option value='달천동'>달천동</option>
            <option value='당사동'>당사동</option>
            <option value='대안동'>대안동</option>
            <option value='명촌동'>명촌동</option>
            <option value='무룡동'>무룡동</option>
            <option value='산하동'>산하동</option>
            <option value='상안동'>상안동</option>
            <option value='송정동'>송정동</option>
            <option value='시례동'>시례동</option>
            <option value='신명동'>신명동</option>
            <option value='신천동'>신천동</option>
            <option value='신현동'>신현동</option>
            <option value='양정동'>양정동</option>
            <option value='어물동'>어물동</option>
            <option value='연암동'>연암동</option>
            <option value='염포동'>염포동</option>
            <option value='정자동'>정자동</option>
            <option value='중산동'>중산동</option>
            <option value='진장동'>진장동</option>
            <option value='천곡동'>천곡동</option>
            <option value='화봉동'>화봉동</option>
            <option value='효문동'>효문동</option>
        `;
    }
    else if (citySelect.value=== '울산시' && districtSelect.value === '울주군') {
        addressselect.innerHTML = `
            <option value='두동면'>두동면</option>
            <option value='두서면'>두서면</option>
            <option value='범서읍'>범서읍</option>
            <option value='삼남읍'>삼남읍</option>
            <option value='삼동면'>삼동면</option>
            <option value='상북면'>상북면</option>
            <option value='서생면'>서생면</option>
            <option value='언양읍'>언양읍</option>
            <option value='온산읍'>온산읍</option>
            <option value='온양읍'>온양읍</option>
            <option value='웅촌면'>웅촌면</option>
            <option value='청량읍'>청량읍</option>
        `;
    }
    else if (citySelect.value=== '울산시' && districtSelect.value === '중구') {
        addressselect.innerHTML = `
            <option value='남외동'>남외동</option>
            <option value='동동'>동동</option>
            <option value='반구동'>반구동</option>
            <option value='서동'>서동</option>
            <option value='약사동'>약사동</option>
            <option value='장현동'>장현동</option>
            <option value='학성동'>학성동</option>
        `;
    }else if (citySelect.value=== '세종시' && districtSelect.value === '세종시') {
        addressselect.innerHTML = `
            <option value='가람동'>가람동</option>
            <option value='고운동'>고운동</option>
            <option value='금남면'>금남면</option>
            <option value='나성동'>나성동</option>
            <option value='누리동'>누리동</option>
            <option value='다솜동'>다솜동</option>
            <option value='다정동'>다정동</option>
            <option value='대평동'>대평동</option>
            <option value='도담동'>도담동</option>
            <option value='반곡동'>반곡동</option>
            <option value='보람동'>보람동</option>
            <option value='부강면'>부강면</option>
            <option value='산울동'>산울동</option>
            <option value='새롬동'>새롬동</option>
            <option value='세종동'>세종동</option>
            <option value='소담동'>소담동</option>
            <option value='소정면'>소정면</option>
            <option value='아름동'>아름동</option>
            <option value='어진동'>어진동</option>
            <option value='연기면'>연기면</option>
            <option value='연동면'>연동면</option>
            <option value='연서면'>연서면</option>
            <option value='용호동'>용호동</option>
            <option value='장군면'>장군면</option>
            <option value='전동면'>전동면</option>
            <option value='전의면'>전의면</option>
            <option value='조치원읍'>조치원읍</option>
            <option value='종촌동'>종촌동</option>
            <option value='집현동'>집현동</option>
            <option value='한별동'>한별동</option>
            <option value='한솔동'>한솔동</option>
            <option value='합강동'>합강동</option>
            <option value='해밀동'>해밀동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '가평군') {
        addressselect.innerHTML = `
            <option value='가평읍'>가평읍</option>
            <option value='북면'>북면</option>
            <option value='상면'>상면</option>
            <option value='설악면'>설악면</option>
            <option value='조종면'>조종면</option>
            <option value='청평면'>청평면</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '고양시 덕양구') {
        addressselect.innerHTML = `
            <option value='강매동'>강매동</option>
            <option value='고양동'>고양동</option>
            <option value='관산동'>관산동</option>
            <option value='내곡동'>내곡동</option>
            <option value='내유동'>내유동</option>
            <option value='대자동'>대자동</option>
            <option value='대장동'>대장동</option>
            <option value='덕은동'>덕은동</option>
            <option value='도내동'>도내동</option>
            <option value='동산동'>동산동</option>
            <option value='벽제동'>벽제동</option>
            <option value='북한동'>북한동</option>
            <option value='삼송동'>삼송동</option>
            <option value='선유동'>선유동</option>
            <option value='성사동'>성사동</option>
            <option value='신원동'>신원동</option>
            <option value='신평동'>신평동</option>
            <option value='오금동'>오금동</option>
            <option value='용두동'>용두동</option>
            <option value='원당동'>원당동</option>
            <option value='원흥동'>원흥동</option>
            <option value='주교동'>주교동</option>
            <option value='지축동'>지축동</option>
            <option value='토당동'>토당동</option>
            <option value='행신동'>행신동</option>
            <option value='행주내동'>행주내동</option>
            <option value='행주외동'>행주외동</option>
            <option value='향동동'>향동동</option>
            <option value='현천동'>현천동</option>
            <option value='화전동'>화전동</option>
            <option value='화정동'>화정동</option>
            <option value='효자동'>효자동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '고양시 일산동구') {
        addressselect.innerHTML = `
            <option value='마두동'>마두동</option>
            <option value='문봉동'>문봉동</option>
            <option value='백석동'>백석동</option>
            <option value='사리현동'>사리현동</option>
            <option value='산황동'>산황동</option>
            <option value='설문동'>설문동</option>
            <option value='성석동'>성석동</option>
            <option value='식사동'>식사동</option>
            <option value='장항동'>장항동</option>
            <option value='정발산동'>정발산동</option>
            <option value='중산동'>중산동</option>
            <option value='지영동'>지영동</option>
            <option value='풍동'>풍동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '고양시 일산서구') {
        addressselect.innerHTML = `
            <option value='가좌동'>가좌동</option>
            <option value='구산동'>구산동</option>
            <option value='대화동'>대화동</option>
            <option value='덕이동'>덕이동</option>
            <option value='법곳동'>법곳동</option>
            <option value='일산동'>일산동</option>
            <option value='주엽동'>주엽동</option>
            <option value='탄현동'>탄현동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '과천시') {
        addressselect.innerHTML = `
            <option value='갈현동'>갈현동</option>
            <option value='과천동'>과천동</option>
            <option value='관문동'>관문동</option>
            <option value='막계동'>막계동</option>
            <option value='문원동'>문원동</option>
            <option value='별양동'>별양동</option>
            <option value='부림동'>부림동</option>
            <option value='원문동'>원문동</option>
            <option value='주암동'>주암동</option>
            <option value='중앙동'>중앙동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '광명시') {
        addressselect.innerHTML = `
            <option value='가학동'>가학동</option>
            <option value='광명동'>광명동</option>
            <option value='노온사동'>노온사동</option>
            <option value='소하동'>소하동</option>
            <option value='옥길동'>옥길동</option>
            <option value='일직동'>일직동</option>
            <option value='철산동'>철산동</option>
            <option value='하안동'>하안동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '광주시') {
        addressselect.innerHTML = `
            <option value='경안동'>경안동</option>
            <option value='고산동'>고산동</option>
            <option value='곤지암읍'>곤지암읍</option>
            <option value='남종면'>남종면</option>
            <option value='남한산성면'>남한산성면</option>
            <option value='능평동'>능평동</option>
            <option value='도척면'>도척면</option>
            <option value='매산동'>매산동</option>
            <option value='목동'>목동</option>
            <option value='목현동'>목현동</option>
            <option value='문형동'>문형동</option>
            <option value='삼동'>삼동</option>
            <option value='송정동'>송정동</option>
            <option value='신현동'>신현동</option>
            <option value='쌍령동'>쌍령동</option>
            <option value='양벌동'>양벌동</option>
            <option value='역동'>역동</option>
            <option value='장지동'>장지동</option>
            <option value='중대동'>중대동</option>
            <option value='직동'>직동</option>
            <option value='초월읍'>초월읍</option>
            <option value='추자동'>추자동</option>
            <option value='탄벌동'>탄벌동</option>
            <option value='태전동'>태전동</option>
            <option value='퇴촌면'>퇴촌면</option>
            <option value='회덕동'>회덕동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '구리시') {
        addressselect.innerHTML = `
            <option value='갈매동'>갈매동</option>
            <option value='교문동'>교문동</option>
            <option value='사노동'>사노동</option>
            <option value='수택동'>수택동</option>
            <option value='아천동'>아천동</option>
            <option value='인창동'>인창동</option>
            <option value='토평동'>토평동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '군포시') {
        addressselect.innerHTML = `
            <option value='금정동'>금정동</option>
            <option value='당동'>당동</option>
            <option value='당정동'>당정동</option>
            <option value='대야미동'>대야미동</option>
            <option value='도마교동'>도마교동</option>
            <option value='둔대동'>둔대동</option>
            <option value='부곡동'>부곡동</option>
            <option value='산본동'>산본동</option>
            <option value='속달동'>속달동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '김포시') {
        addressselect.innerHTML = `
            <option value='감정동'>감정동</option>
            <option value='걸포동'>걸포동</option>
            <option value='고촌읍'>고촌읍</option>
            <option value='구래동'>구래동</option>
            <option value='대곶면'>대곶면</option>
            <option value='마산동'>마산동</option>
            <option value='북변동'>북변동</option>
            <option value='사우동'>사우동</option>
            <option value='양촌읍'>양촌읍</option>
            <option value='운양동'>운양동</option>
            <option value='월곶면'>월곶면</option>
            <option value='장기동'>장기동</option>
            <option value='통진읍'>통진읍</option>
            <option value='풍무동'>풍무동</option>
            <option value='하성면'>하성면</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '남양주시') {
        addressselect.innerHTML = `
            <option value='금곡동'>금곡동</option>
            <option value='다산동'>다산동</option>
            <option value='도농동'>도농동</option>
            <option value='별내동'>별내동</option>
            <option value='별내면'>별내면</option>
            <option value='삼패동'>삼패동</option>
            <option value='수동면'>수동면</option>
            <option value='수석동'>수석동</option>
            <option value='오남읍'>오남읍</option>
            <option value='와부읍'>와부읍</option>
            <option value='이패동'>이패동</option>
            <option value='일패동'>일패동</option>
            <option value='조안면'>조안면</option>
            <option value='지금동'>지금동</option>
            <option value='진건읍'>진건읍</option>
            <option value='진접읍'>진접읍</option>
            <option value='퇴계원읍'>퇴계원읍</option>
            <option value='평내동'>평내동</option>
            <option value='호평동'>호평동</option>
            <option value='화도읍'>화도읍</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '동두천시') {
        addressselect.innerHTML = `
            <option value='걸산동'>걸산동</option>
            <option value='광암동'>광암동</option>
            <option value='동두천동'>동두천동</option>
            <option value='보산동'>보산동</option>
            <option value='상봉암동'>상봉암동</option>
            <option value='상패동'>상패동</option>
            <option value='생연동'>생연동</option>
            <option value='송내동'>송내동</option>
            <option value='안흥동'>안흥동</option>
            <option value='지행동'>지행동</option>
            <option value='탑동동'>탑동동</option>
            <option value='하봉암동'>하봉암동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '부천시') {
        addressselect.innerHTML = `
            <option value='계수동'>계수동</option>
            <option value='고강동'>고강동</option>
            <option value='괴안동'>괴안동</option>
            <option value='내동'>내동</option>
            <option value='대장동'>대장동</option>
            <option value='도당동'>도당동</option>
            <option value='범박동'>범박동</option>
            <option value='삼정동'>삼정동</option>
            <option value='상동'>상동</option>
            <option value='소사동'>소사동</option>
            <option value='소사본동'>소사본동</option>
            <option value='송내동'>송내동</option>
            <option value='심곡동'>심곡동</option>
            <option value='심곡본동'>심곡본동</option>
            <option value='약대동'>약대동</option>
            <option value='여월동'>여월동</option>
            <option value='역곡동'>역곡동</option>
            <option value='오정동'>오정동</option>
            <option value='옥길동'>옥길동</option>
            <option value='원미동'>원미동</option>
            <option value='원종동'>원종동</option>
            <option value='작동'>작동</option>
            <option value='중동'>중동</option>
            <option value='춘의동'>춘의동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '성남시 분당구') {
        addressselect.innerHTML = `
            <option value='구미동'>구미동</option>
            <option value='궁내동'>궁내동</option>
            <option value='금곡동'>금곡동</option>
            <option value='대장동'>대장동</option>
            <option value='동원동'>동원동</option>
            <option value='백현동'>백현동</option>
            <option value='분당동'>분당동</option>
            <option value='삼평동'>삼평동</option>
            <option value='서현동'>서현동</option>
            <option value='석운동'>석운동</option>
            <option value='수내동'>수내동</option>
            <option value='야탑동'>야탑동</option>
            <option value='운중동'>운중동</option>
            <option value='율동'>율동</option>
            <option value='이매동'>이매동</option>
            <option value='정자동'>정자동</option>
            <option value='판교동'>판교동</option>
            <option value='하산운동'>하산운동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '성남시 수정구') {
        addressselect.innerHTML = `
            <option value='고등동'>고등동</option>
            <option value='금토동'>금토동</option>
            <option value='단대동'>단대동</option>
            <option value='둔전동'>둔전동</option>
            <option value='복정동'>복정동</option>
            <option value='사송동'>사송동</option>
            <option value='산성동'>산성동</option>
            <option value='상적동'>상적동</option>
            <option value='수진동'>수진동</option>
            <option value='시흥동'>시흥동</option>
            <option value='신촌동'>신촌동</option>
            <option value='신흥동'>신흥동</option>
            <option value='심곡동'>심곡동</option>
            <option value='양지동'>양지동</option>
            <option value='오야동'>오야동</option>
            <option value='창곡동'>창곡동</option>
            <option value='태평동'>태평동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '성남시 중원구') {
        addressselect.innerHTML = `
            <option value='갈현동'>갈현동</option>
            <option value='금광동'>금광동</option>
            <option value='도촌동'>도촌동</option>
            <option value='상대원동'>상대원동</option>
            <option value='성남동'>성남동</option>
            <option value='여수동'>여수동</option>
            <option value='은행동'>은행동</option>
            <option value='중앙동'>중앙동</option>
            <option value='하대원동'>하대원동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '수원시 권선구') {
        addressselect.innerHTML = `
            <option value='고색동'>고색동</option>
            <option value='곡반정동'>곡반정동</option>
            <option value='구운동'>구운동</option>
            <option value='권선동'>권선동</option>
            <option value='금곡동'>금곡동</option>
            <option value='당수동'>당수동</option>
            <option value='대황교동'>대황교동</option>
            <option value='서둔동'>서둔동</option>
            <option value='세류동'>세류동</option>
            <option value='오목천동'>오목천동</option>
            <option value='입북동'>입북동</option>
            <option value='장지동'>장지동</option>
            <option value='탑동'>탑동</option>
            <option value='평동'>평동</option>
            <option value='평리동'>평리동</option>
            <option value='호매실동'>호매실동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '수원시 영통구') {
        addressselect.innerHTML = `
            <option value='망포동'>망포동</option>
            <option value='매탄동'>매탄동</option>
            <option value='신동'>신동</option>
            <option value='영통동'>영통동</option>
            <option value='원천동'>원천동</option>
            <option value='이의동'>이의동</option>
            <option value='하동'>하동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '수원시 장안구') {
        addressselect.innerHTML = `
            <option value='상광교동'>상광교동</option>
            <option value='송죽동'>송죽동</option>
            <option value='연무동'>연무동</option>
            <option value='영화동'>영화동</option>
            <option value='율전동'>율전동</option>
            <option value='이목동'>이목동</option>
            <option value='정자동'>정자동</option>
            <option value='조원동'>조원동</option>
            <option value='천천동'>천천동</option>
            <option value='파장동'>파장동</option>
            <option value='하광교동'>하광교동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '수원시 팔달구') {
        addressselect.innerHTML = `
            <option value='고등동'>고등동</option>
            <option value='교동'>교동</option>
            <option value='구천동'>구천동</option>
            <option value='남수동'>남수동</option>
            <option value='남창동'>남창동</option>
            <option value='매교동'>매교동</option>
            <option value='매산로1가'>매산로1가</option>
            <option value='매산로2가'>매산로2가</option>
            <option value='매산로3가'>매산로3가</option>
            <option value='매향동'>매향동</option>
            <option value='북수동'>북수동</option>
            <option value='신풍동'>신풍동</option>
            <option value='영동'>영동</option>
            <option value='우만동'>우만동</option>
            <option value='인계동'>인계동</option>
            <option value='장안동'>장안동</option>
            <option value='중동'>중동</option>
            <option value='지동'>지동</option>
            <option value='팔달로1가'>팔달로1가</option>
            <option value='팔달로2가'>팔달로2가</option>
            <option value='팔달로3가'>팔달로3가</option>
            <option value='화서동'>화서동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '시흥시') {
        addressselect.innerHTML = `
            <option value='거모동'>거모동</option>
            <option value='계수동'>계수동</option>
            <option value='과림동'>과림동</option>
            <option value='광석동'>광석동</option>
            <option value='군자동'>군자동</option>
            <option value='금이동'>금이동</option>
            <option value='논곡동'>논곡동</option>
            <option value='능곡동'>능곡동</option>
            <option value='대야동'>대야동</option>
            <option value='도창동'>도창동</option>
            <option value='매화동'>매화동</option>
            <option value='목감동'>목감동</option>
            <option value='무지내동'>무지내동</option>
            <option value='물왕동'>물왕동</option>
            <option value='미산동'>미산동</option>
            <option value='방산동'>방산동</option>
            <option value='배곧동'>배곧동</option>
            <option value='산현동'>산현동</option>
            <option value='신천동'>신천동</option>
            <option value='안현동'>안현동</option>
            <option value='월곶동'>월곶동</option>
            <option value='은행동'>은행동</option>
            <option value='장곡동'>장곡동</option>
            <option value='장현동'>장현동</option>
            <option value='정왕동'>정왕동</option>
            <option value='조남동'>조남동</option>
            <option value='죽율동'>죽율동</option>
            <option value='포동'>포동</option>
            <option value='하상동'>하상동</option>
            <option value='하중동'>하중동</option>
            <option value='화정동'>화정동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '안산시 단원구') {
        addressselect.innerHTML = `
            <option value='고잔동'>고잔동</option>
            <option value='대부남동'>대부남동</option>
            <option value='대부동동'>대부동동</option>
            <option value='대부북동'>대부북동</option>
            <option value='목내동'>목내동</option>
            <option value='선감동'>선감동</option>
            <option value='선부동'>선부동</option>
            <option value='성곡동'>성곡동</option>
            <option value='신길동'>신길동</option>
            <option value='와동'>와동</option>
            <option value='원곡동'>원곡동</option>
            <option value='원시동'>원시동</option>
            <option value='초지동'>초지동</option>
            <option value='풍도동'>풍도동</option>
            <option value='화정동'>화정동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '안산시 상록구') {
        addressselect.innerHTML = `
            <option value='건건동'>건건동</option>
            <option value='본오동'>본오동</option>
            <option value='부곡동'>부곡동</option>
            <option value='사동'>사동</option>
            <option value='사사동'>사사동</option>
            <option value='성포동'>성포동</option>
            <option value='수암동'>수암동</option>
            <option value='양상동'>양상동</option>
            <option value='월피동'>월피동</option>
            <option value='이동'>이동</option>
            <option value='일동'>일동</option>
            <option value='장상동'>장상동</option>
            <option value='장하동'>장하동</option>
            <option value='팔곡이동'>팔곡이동</option>
            <option value='팔곡일동'>팔곡일동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '안성시') {
        addressselect.innerHTML = `
            <option value='가사동'>가사동</option>
            <option value='가현동'>가현동</option>
            <option value='계동'>계동</option>
            <option value='고삼면'>고삼면</option>
            <option value='공도읍'>공도읍</option>
            <option value='구포동'>구포동</option>
            <option value='금광면'>금광면</option>
            <option value='금산동'>금산동</option>
            <option value='금석동'>금석동</option>
            <option value='낙원동'>낙원동</option>
            <option value='당왕동'>당왕동</option>
            <option value='대덕면'>대덕면</option>
            <option value='대천동'>대천동</option>
            <option value='도기동'>도기동</option>
            <option value='동본동'>동본동</option>
            <option value='명륜동'>명륜동</option>
            <option value='미양면'>미양면</option>
            <option value='발화동'>발화동</option>
            <option value='보개면'>보개면</option>
            <option value='봉남동'>봉남동</option>
            <option value='봉산동'>봉산동</option>
            <option value='사곡동'>사곡동</option>
            <option value='삼죽면'>삼죽면</option>
            <option value='서운면'>서운면</option>
            <option value='석정동'>석정동</option>
            <option value='성남동'>성남동</option>
            <option value='숭인동'>숭인동</option>
            <option value='신건지동'>신건지동</option>
            <option value='신모산동'>신모산동</option>
            <option value='신소현동'>신소현동</option>
            <option value='신흥동'>신흥동</option>
            <option value='아양동'>아양동</option>
            <option value='양성면'>양성면</option>
            <option value='연지동'>연지동</option>
            <option value='영동'>영동</option>
            <option value='옥산동'>옥산동</option>
            <option value='옥천동'>옥천동</option>
            <option value='원곡면'>원곡면</option>
            <option value='인지동'>인지동</option>
            <option value='일죽면'>일죽면</option>
            <option value='장상동'>장상동</option>
            <option value='장하동'>장하동</option>
            <option value='중리동'>중리동</option>
            <option value='창전동'>창전동</option>
            <option value='현수동'>현수동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '안양시 동안구') {
        addressselect.innerHTML = `
            <option value='관양동'>관양동</option>
            <option value='비산동'>비산동</option>
            <option value='평촌동'>평촌동</option>
            <option value='호계동'>호계동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '안양시 만안구') {
        addressselect.innerHTML = `
            <option value='박달동'>박달동</option>
            <option value='석수동'>석수동</option>
            <option value='안양동'>안양동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '양주시') {
        addressselect.innerHTML = `
            <option value='고암동'>고암동</option>
            <option value='고읍동'>고읍동</option>
            <option value='광사동'>광사동</option>
            <option value='광적면'>광적면</option>
            <option value='남면'>남면</option>
            <option value='남방동'>남방동</option>
            <option value='덕계동'>덕계동</option>
            <option value='덕정동'>덕정동</option>
            <option value='마전동'>마전동</option>
            <option value='만송동'>만송동</option>
            <option value='백석읍'>백석읍</option>
            <option value='봉양동'>봉양동</option>
            <option value='산북동'>산북동</option>
            <option value='삼숭동'>삼숭동</option>
            <option value='어둔동'>어둔동</option>
            <option value='옥정동'>옥정동</option>
            <option value='유양동'>유양동</option>
            <option value='율정동'>율정동</option>
            <option value='은현면'>은현면</option>
            <option value='장흥면'>장흥면</option>
            <option value='회암동'>회암동</option>
            <option value='회정동'>회정동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '연천군') {
        addressselect.innerHTML = `
            <option value='군남면'>군남면</option>
            <option value='미산면'>미산면</option>
            <option value='백학면'>백학면</option>
            <option value='신서면'>신서면</option>
            <option value='연천읍'>연천읍</option>
            <option value='왕징면'>왕징면</option>
            <option value='장남면'>장남면</option>
            <option value='전곡읍'>전곡읍</option>
            <option value='중면'>중면</option>
            <option value='청산면'>청산면</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '오산시') {
        addressselect.innerHTML = `
            <option value='가수동'>가수동</option>
            <option value='가장동'>가장동</option>
            <option value='갈곶동'>갈곶동</option>
            <option value='고현동'>고현동</option>
            <option value='궐동'>궐동</option>
            <option value='금암동'>금암동</option>
            <option value='내삼미동'>내삼미동</option>
            <option value='누읍동'>누읍동</option>
            <option value='두곡동'>두곡동</option>
            <option value='벌음동'>벌음동</option>
            <option value='부산동'>부산동</option>
            <option value='서동'>서동</option>
            <option value='서랑동'>서랑동</option>
            <option value='세교동'>세교동</option>
            <option value='수청동'>수청동</option>
            <option value='양산동'>양산동</option>
            <option value='오산동'>오산동</option>
            <option value='외삼미동'>외삼미동</option>
            <option value='원동'>원동</option>
            <option value='은계동'>은계동</option>
            <option value='지곶동'>지곶동</option>
            <option value='청학동'>청학동</option>
            <option value='청호동'>청호동</option>
            <option value='탑동'>탑동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '용인시 기흥구') {
        addressselect.innerHTML = `
            <option value='고매동'>고매동</option>
            <option value='공세동'>공세동</option>
            <option value='구갈동'>구갈동</option>
            <option value='농서동'>농서동</option>
            <option value='동백동'>동백동</option>
            <option value='마북동'>마북동</option>
            <option value='보라동'>보라동</option>
            <option value='보정동'>보정동</option>
            <option value='상갈동'>상갈동</option>
            <option value='상하동'>상하동</option>
            <option value='서천동'>서천동</option>
            <option value='신갈동'>신갈동</option>
            <option value='언남동'>언남동</option>
            <option value='영덕동'>영덕동</option>
            <option value='중동'>중동</option>
            <option value='지곡동'>지곡동</option>
            <option value='청덕동'>청덕동</option>
            <option value='하갈동'>하갈동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '용인시 수지구') {
        addressselect.innerHTML = `
            <option value='고기동'>고기동</option>
            <option value='동천동'>동천동</option>
            <option value='상현동'>상현동</option>
            <option value='성복동'>성복동</option>
            <option value='신봉동'>신봉동</option>
            <option value='죽전동'>죽전동</option>
            <option value='풍덕천동'>풍덕천동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '용인시 처인구') {
        addressselect.innerHTML = `
            <option value='고림동'>고림동</option>
            <option value='김량장동'>김량장동</option>
            <option value='남동'>남동</option>
            <option value='남사읍'>남사읍</option>
            <option value='마평동'>마평동</option>
            <option value='모현읍'>모현읍</option>
            <option value='백암면'>백암면</option>
            <option value='삼가동'>삼가동</option>
            <option value='양지면'>양지면</option>
            <option value='역북동'>역북동</option>
            <option value='운학동'>운학동</option>
            <option value='원삼면'>원삼면</option>
            <option value='이동읍'>이동읍</option>
            <option value='포곡읍'>포곡읍</option>
            <option value='해곡동'>해곡동</option>
            <option value='호동'>호동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '의왕시') {
        addressselect.innerHTML = `
            <option value='고천동'>고천동</option>
            <option value='내손동'>내손동</option>
            <option value='삼동'>삼동</option>
            <option value='오전동'>오전동</option>
            <option value='왕곡동'>왕곡동</option>
            <option value='월암동'>월암동</option>
            <option value='이동'>이동</option>
            <option value='청계동'>청계동</option>
            <option value='초평동'>초평동</option>
            <option value='포일동'>포일동</option>
            <option value='학의동'>학의동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '의정부시') {
        addressselect.innerHTML = `
            <option value='가능동'>가능동</option>
            <option value='고산동'>고산동</option>
            <option value='금오동'>금오동</option>
            <option value='낙양동'>낙양동</option>
            <option value='녹양동'>녹양동</option>
            <option value='민락동'>민락동</option>
            <option value='산곡동'>산곡동</option>
            <option value='신곡동'>신곡동</option>
            <option value='용현동'>용현동</option>
            <option value='의정부동'>의정부동</option>
            <option value='자일동'>자일동</option>
            <option value='장암동'>장암동</option>
            <option value='호원동'>호원동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '이천시') {
        addressselect.innerHTML = `
            <option value='갈산동'>갈산동</option>
            <option value='고담동'>고담동</option>
            <option value='관고동'>관고동</option>
            <option value='단월동'>단월동</option>
            <option value='대월면'>대월면</option>
            <option value='대포동'>대포동</option>
            <option value='마장면'>마장면</option>
            <option value='모가면'>모가면</option>
            <option value='백사면'>백사면</option>
            <option value='부발읍'>부발읍</option>
            <option value='사음동'>사음동</option>
            <option value='설성면'>설성면</option>
            <option value='송정동'>송정동</option>
            <option value='신둔면'>신둔면</option>
            <option value='안흥동'>안흥동</option>
            <option value='율면'>율면</option>
            <option value='율현동'>율현동</option>
            <option value='장록동'>장록동</option>
            <option value='장호원읍'>장호원읍</option>
            <option value='중리동'>중리동</option>
            <option value='증일동'>증일동</option>
            <option value='증포동'>증포동</option>
            <option value='진리동'>진리동</option>
            <option value='창전동'>창전동</option>
            <option value='호법면'>호법면</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '파주시') {
        addressselect.innerHTML = `
            <option value='검산동'>검산동</option>
            <option value='광탄면'>광탄면</option>
            <option value='교하동'>교하동</option>
            <option value='군내면'>군내면</option>
            <option value='금릉동'>금릉동</option>
            <option value='금촌동'>금촌동</option>
            <option value='다율동'>다율동</option>
            <option value='당하동'>당하동</option>
            <option value='동패동'>동패동</option>
            <option value='맥금동'>맥금동</option>
            <option value='목동동'>목동동</option>
            <option value='문발동'>문발동</option>
            <option value='문산읍'>문산읍</option>
            <option value='법원읍'>법원읍</option>
            <option value='산남동'>산남동</option>
            <option value='상지석동'>상지석동</option>
            <option value='서패동'>서패동</option>
            <option value='송촌동'>송촌동</option>
            <option value='신촌동'>신촌동</option>
            <option value='아동동'>아동동</option>
            <option value='야당동'>야당동</option>
            <option value='야동동'>야동동</option>
            <option value='연다산동'>연다산동</option>
            <option value='오도동'>오도동</option>
            <option value='와동동'>와동동</option>
            <option value='월롱면'>월롱면</option>
            <option value='장단면'>장단면</option>
            <option value='적성면'>적성면</option>
            <option value='조리읍'>조리읍</option>
            <option value='진동면'>진동면</option>
            <option value='진서면'>진서면</option>
            <option value='탄현면'>탄현면</option>
            <option value='파주읍'>파주읍</option>
            <option value='파평면'>파평면</option>
            <option value='하지석동'>하지석동</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '평택시') {
        addressselect.innerHTML = `
            <option value='가재동'>가재동</option>
            <option value='고덕동'>고덕동</option>
            <option value='고덕면'>고덕면</option>
            <option value='군문동'>군문동</option>
            <option value='도일동'>도일동</option>
            <option value='독곡동'>독곡동</option>
            <option value='동삭동'>동삭동</option>
            <option value='모곡동'>모곡동</option>
            <option value='비전동'>비전동</option>
            <option value='서정동'>서정동</option>
            <option value='서탄면'>서탄면</option>
            <option value='세교동'>세교동</option>
            <option value='소사동'>소사동</option>
            <option value='신대동'>신대동</option>
            <option value='신장동'>신장동</option>
            <option value='안중읍'>안중읍</option>
            <option value='오성면'>오성면</option>
            <option value='용이동'>용이동</option>
            <option value='월곡동'>월곡동</option>
            <option value='유천동'>유천동</option>
            <option value='이충동'>이충동</option>
            <option value='장당동'>장당동</option>
            <option value='장안동'>장안동</option>
            <option value='죽백동'>죽백동</option>
            <option value='지산동'>지산동</option>
            <option value='지제동'>지제동</option>
            <option value='진위면'>진위면</option>
            <option value='청룡동'>청룡동</option>
            <option value='청북읍'>청북읍</option>
            <option value='칠괴동'>칠괴동</option>
            <option value='칠원동'>칠원동</option>
            <option value='통복동'>통복동</option>
            <option value='평택동'>평택동</option>
            <option value='포승읍'>포승읍</option>
            <option value='합정동'>합정동</option>
            <option value='현덕면'>현덕면</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '포천시') {
        addressselect.innerHTML = `
            <option value='가산면'>가산면</option>
            <option value='관인면'>관인면</option>
            <option value='군내면'>군내면</option>
            <option value='내촌면'>내촌면</option>
            <option value='동교동'>동교동</option>
            <option value='선단동'>선단동</option>
            <option value='설운동'>설운동</option>
            <option value='소흘읍'>소흘읍</option>
            <option value='신북면'>신북면</option>
            <option value='신읍동'>신읍동</option>
            <option value='어룡동'>어룡동</option>
            <option value='영북면'>영북면</option>
            <option value='영중면'>영중면</option>
            <option value='이동면'>이동면</option>
            <option value='일동면'>일동면</option>
            <option value='자작동'>자작동</option>
            <option value='창수면'>창수면</option>
            <option value='화현면'>화현면</option>
        `;
    }else if (citySelect.value=== '경기도' && districtSelect.value === '하남시') {
        addressselect.innerHTML = `
            <option value='감북동'>감북동</option>
            <option value='감이동'>감이동</option>
            <option value='감일동'>감일동</option>
            <option value='광암동'>광암동</option>
            <option value='교산동'>교산동</option>
            <option value='당정동'>당정동</option>
            <option value='덕풍동'>덕풍동</option>
            <option value='망월동'>망월동</option>
            <option value='미사동'>미사동</option>
            <option value='배알미동'>배알미동</option>
            <option value='상사창동'>상사창동</option>
            <option value='상산곡동'>상산곡동</option>
            <option value='선동'>선동</option>
            <option value='신장동'>신장동</option>
            <option value='창우동'>창우동</option>
            <option value='천현동'>천현동</option>
            <option value='초이동'>초이동</option>
            <option value='초일동'>초일동</option>
            <option value='춘궁동'>춘궁동</option>
            <option value='풍산동'>풍산동</option>
            <option value='하사창동'>하사창동</option>
            <option value='하산곡동'>하산곡동</option>
            <option value='학암동'>학암동</option>
            <option value='항동'>항동</option>
        `;
    }
    else if (citySelect.value=== '경기도' && districtSelect.value === '화성시') {
        addressselect.innerHTML = `
            <option value='금곡동'>금곡동</option>
            <option value='기산동'>기산동</option>
            <option value='기안동'>기안동</option>
            <option value='남양읍'>남양읍</option>
            <option value='능동'>능동</option>
            <option value='마도면'>마도면</option>
            <option value='매송면'>매송면</option>
            <option value='목동'>목동</option>
            <option value='반송동'>반송동</option>
            <option value='반월동'>반월동</option>
            <option value='반정동'>반정동</option>
            <option value='방교동'>방교동</option>
            <option value='배양동'>배양동</option>
            <option value='병점동'>병점동</option>
            <option value='봉담읍'>봉담읍</option>
            <option value='비봉면'>비봉면</option>
            <option value='산척동'>산척동</option>
            <option value='새솔동'>새솔동</option>
            <option value='서신면'>서신면</option>
            <option value='석우동'>석우동</option>
            <option value='송동'>송동</option>
            <option value='송산동'>송산동</option>
            <option value='송산면'>송산면</option>
            <option value='신동'>신동</option>
            <option value='안녕동'>안녕동</option>
            <option value='양감면'>양감면</option>
            <option value='영천동'>영천동</option>
            <option value='오산동'>오산동</option>
            <option value='우정읍'>우정읍</option>
            <option value='장안면'>장안면</option>
            <option value='장지동'>장지동</option>
            <option value='정남면'>정남면</option>
            <option value='중동'>중동</option>
            <option value='진안동'>진안동</option>
            <option value='청계동'>청계동</option>
            <option value='팔탄면'>팔탄면</option>
            <option value='향남읍'>향남읍</option>
            <option value='황계동'>황계동</option>
        `;
    }else if (citySelect.value=== '강원도' && districtSelect.value === '강릉시') {
        addressselect.innerHTML = `
            <option value='강동면'>강동면</option>
            <option value='강문동'>강문동</option>
            <option value='견소동'>견소동</option>
            <option value='교동'>교동</option>
            <option value='구정면'>구정면</option>
            <option value='금학동'>금학동</option>
            <option value='난곡동'>난곡동</option>
            <option value='남문동'>남문동</option>
            <option value='남항진동'>남항진동</option>
            <option value='내곡동'>내곡동</option>
            <option value='노암동'>노암동</option>
            <option value='담산동'>담산동</option>
            <option value='대전동'>대전동</option>
            <option value='두산동'>두산동</option>
            <option value='명주동'>명주동</option>
            <option value='박월동'>박월동</option>
            <option value='병산동'>병산동</option>
            <option value='사천면'>사천면</option>
            <option value='성남동'>성남동</option>
            <option value='성내동'>성내동</option>
            <option value='성산면'>성산면</option>
            <option value='송정동'>송정동</option>
            <option value='신석동'>신석동</option>
            <option value='안현동'>안현동</option>
            <option value='연곡면'>연곡면</option>
            <option value='옥계면'>옥계면</option>
            <option value='왕산면'>왕산면</option>
            <option value='용강동'>용강동</option>
            <option value='운산동'>운산동</option>
            <option value='운정동'>운정동</option>
            <option value='월호평동'>월호평동</option>
            <option value='유산동'>유산동</option>
            <option value='임당동'>임당동</option>
            <option value='입암동'>입암동</option>
            <option value='장현동'>장현동</option>
            <option value='저동'>저동</option>
            <option value='주문진읍'>주문진읍</option>
            <option value='죽헌동'>죽헌동</option>
            <option value='지변동'>지변동</option>
            <option value='청계동'>청계동</option>
            <option value='초당동'>초당동</option>
            <option value='포남동'>포남동</option>
            <option value='학동'>학동</option>
            <option value='홍제동'>홍제동</option>
            <option value='회산동'>회산동</option>
        `;
    }
    else if (citySelect.value=== '강원도' && districtSelect.value === '고성군') {
        addressselect.innerHTML = `
            <option value='간성읍'>간성읍</option>
            <option value='거진읍'>거진읍</option>
            <option value='수동면'>수동면</option>
            <option value='죽왕면'>죽왕면</option>
            <option value='토성면'>토성면</option>
            <option value='현내면'>현내면</option>
        `;
    }
    else if (citySelect.value=== '강원도' && districtSelect.value === '동해시') {
        addressselect.innerHTML = `
            <option value='괴란동'>괴란동</option>
            <option value='구미동'>구미동</option>
            <option value='구호동'>구호동</option>
            <option value='귀운동'>귀운동</option>
            <option value='나안동'>나안동</option>
            <option value='내동'>내동</option>
            <option value='단봉동'>단봉동</option>
            <option value='달방동'>달방동</option>
            <option value='대구동'>대구동</option>
            <option value='대진동'>대진동</option>
            <option value='동회동'>동회동</option>
            <option value='만우동'>만우동</option>
            <option value='망상동'>망상동</option>
            <option value='묵호진동'>묵호진동</option>
            <option value='발한동'>발한동</option>
            <option value='부곡동'>부곡동</option>
            <option value='북평동'>북평동</option>
            <option value='비천동'>비천동</option>
            <option value='삼화동'>삼화동</option>
            <option value='송정동'>송정동</option>
            <option value='쇄운동'>쇄운동</option>
            <option value='신흥동'>신흥동</option>
            <option value='심곡동'>심곡동</option>
            <option value='어달동'>어달동</option>
            <option value='용정동'>용정동</option>
            <option value='이기동'>이기동</option>
            <option value='이도동'>이도동</option>
            <option value='이로동'>이로동</option>
            <option value='지가동'>지가동</option>
            <option value='지흥동'>지흥동</option>
            <option value='천곡동'>천곡동</option>
            <option value='초구동'>초구동</option>
            <option value='추암동'>추암동</option>
            <option value='평릉동'>평릉동</option>
            <option value='호현동'>호현동</option>
            <option value='효가동'>효가동</option>
        `;
    }
    else if (citySelect.value=== '강원도' && districtSelect.value === '삼척시') {
        addressselect.innerHTML = `
            <option value='가곡면'>가곡면</option>
            <option value='갈천동'>갈천동</option>
            <option value='건지동'>건지동</option>
            <option value='교동'>교동</option>
            <option value='근덕면'>근덕면</option>
            <option value='근산동'>근산동</option>
            <option value='남양동'>남양동</option>
            <option value='노곡면'>노곡면</option>
            <option value='당저동'>당저동</option>
            <option value='도계읍'>도계읍</option>
            <option value='등봉동'>등봉동</option>
            <option value='마달동'>마달동</option>
            <option value='마평동'>마평동</option>
            <option value='미로면'>미로면</option>
            <option value='사직동'>사직동</option>
            <option value='성남동'>성남동</option>
            <option value='성내동'>성내동</option>
            <option value='성북동'>성북동</option>
            <option value='신기면'>신기면</option>
            <option value='오분동'>오분동</option>
            <option value='오사동'>오사동</option>
            <option value='우지동'>우지동</option>
            <option value='원당동'>원당동</option>
            <option value='원덕읍'>원덕읍</option>
            <option value='읍상동'>읍상동</option>
            <option value='읍중동'>읍중동</option>
            <option value='자원동'>자원동</option>
            <option value='적노동'>적노동</option>
            <option value='정상동'>정상동</option>
            <option value='정하동'>정하동</option>
            <option value='조비동'>조비동</option>
            <option value='증산동'>증산동</option>
            <option value='평전동'>평전동</option>
            <option value='하장면'>하장면</option>
        `;
    }
    else if (citySelect.value=== '강원도' && districtSelect.value === '속초시') {
        addressselect.innerHTML = `
            <option value='교동'>교동</option>
            <option value='금호동'>금호동</option>
            <option value='노학동'>노학동</option>
            <option value='대포동'>대포동</option>
            <option value='도문동'>도문동</option>
            <option value='동명동'>동명동</option>
            <option value='설악동'>설악동</option>
            <option value='영랑동'>영랑동</option>
            <option value='장사동'>장사동</option>
            <option value='조양동'>조양동</option>
            <option value='중앙동'>중앙동</option>
            <option value='청학동'>청학동</option>
        `;
    }else if (citySelect.value=== '강원도' && districtSelect.value === '양구군') {
        addressselect.innerHTML = `
            <option value='국토정중앙면'>국토정중앙면</option>
            <option value='동면'>동면</option>
            <option value='방산면'>방산면</option>
            <option value='양구읍'>양구읍</option>
            <option value='해안면'>해안면</option>
        `;
    }
    else if (citySelect.value=== '강원도' && districtSelect.value === '양양군') {
        addressselect.innerHTML = `
            <option value='강현면'>강현면</option>
            <option value='서면'>서면</option>
            <option value='손양면'>손양면</option>
            <option value='양양읍'>양양읍</option>
        `;
    }else if (citySelect.value=== '강원도' && districtSelect.value === '영월군') {
        addressselect.innerHTML = `
            <option value='김삿갓면'>김삿갓면</option>
            <option value='남면'>남면</option>
            <option value='무릉도원면'>무릉도원면</option>
            <option value='북면'>북면</option>
            <option value='산솔면'>산솔면</option>
            <option value='상동읍'>상동읍</option>
            <option value='영월읍'>영월읍</option>
            <option value='주천면'>주천면</option>
            <option value='한반도면'>한반도면</option>
        `;
    }
    else if (citySelect.value=== '강원도' && districtSelect.value === '인제군') {
        addressselect.innerHTML = `
            <option value='기린면'>기린면</option>
            <option value='남면'>남면</option>
            <option value='북면'>북면</option>
            <option value='상남면'>상남면</option>
            <option value='서화면'>서화면</option>
            <option value='인제읍'>인제읍</option>
        `;
    }else if (citySelect.value=== '강원도' && districtSelect.value === '원주시') {
        addressselect.innerHTML = `
            <option value='가현동'>가현동</option>
            <option value='개운동'>개운동</option>
            <option value='관설동'>관설동</option>
            <option value='귀래면'>귀래면</option>
            <option value='단구동'>단구동</option>
            <option value='명륜동'>명륜동</option>
            <option value='무실동'>무실동</option>
            <option value='문막읍'>문막읍</option>
            <option value='반곡동'>반곡동</option>
            <option value='봉산동'>봉산동</option>
            <option value='부론면'>부론면</option>
            <option value='소초면'>소초면</option>
            <option value='신림면'>신림면</option>
            <option value='우산동'>우산동</option>
            <option value='원동'>원동</option>
            <option value='인동'>인동</option>
            <option value='일산동'>일산동</option>
            <option value='중앙동'>중앙동</option>
            <option value='지정면'>지정면</option>
            <option value='태장동'>태장동</option>
            <option value='판부면'>판부면</option>
            <option value='평원동'>평원동</option>
            <option value='학성동'>학성동</option>
            <option value='행구동'>행구동</option>
            <option value='호저면'>호저면</option>
            <option value='흥업면'>흥업면</option>
        `;
    }else if (citySelect.value=== '강원도' && districtSelect.value === '정선군') {
        addressselect.innerHTML = `
            <option value='고한읍'>고한읍</option>
            <option value='남면'>남면</option>
            <option value='북평면'>북평면</option>
            <option value='사북읍'>사북읍</option>
            <option value='신동읍'>신동읍</option>
            <option value='여량면'>여량면</option>
            <option value='임계면'>임계면</option>
            <option value='정선읍'>정선읍</option>
            <option value='화암면'>화암면</option>
        `;
    }
    else if (citySelect.value=== '강원도' && districtSelect.value === '철원군') {
        addressselect.innerHTML = `
            <option value='갈말읍'>갈말읍</option>
            <option value='근남면'>근남면</option>
            <option value='근동면'>근동면</option>
            <option value='근북면'>근북면</option>
            <option value='김화읍'>김화읍</option>
            <option value='동송읍'>동송읍</option>
            <option value='서면'>서면</option>
            <option value='원남면'>원남면</option>
            <option value='원동면'>원동면</option>
            <option value='임남면'>임남면</option>
            <option value='철원읍'>철원읍</option>
        `;
    }
    else if (citySelect.value=== '강원도' && districtSelect.value === '춘천시') {
        addressselect.innerHTML = `
            <option value='교동'>교동</option>
            <option value='근화동'>근화동</option>
            <option value='낙원동'>낙원동</option>
            <option value='남면'>남면</option>
            <option value='남산면'>남산면</option>
            <option value='동내면'>동내면</option>
            <option value='동면'>동면</option>
            <option value='동산면'>동산면</option>
            <option value='봉의동'>봉의동</option>
            <option value='북산면'>북산면</option>
            <option value='사농동'>사농동</option>
            <option value='사북면'>사북면</option>
            <option value='삼천동'>삼천동</option>
            <option value='서면'>서면</option>
            <option value='석사동'>석사동</option>
            <option value='소양로1가'>소양로1가</option>
            <option value='소양로2가'>소양로2가</option>
            <option value='소양로3가'>소양로3가</option>
            <option value='소양로4가'>소양로4가</option>
            <option value='송암동'>송암동</option>
            <option value='신동'>신동</option>
            <option value='신북읍'>신북읍</option>
            <option value='약사동'>약사동</option>
            <option value='옥천동'>옥천동</option>
            <option value='온의동'>온의동</option>
            <option value='요선동'>요선동</option>
            <option value='우두동'>우두동</option>
            <option value='운교동'>운교동</option>
            <option value='조양동'>조양동</option>
            <option value='죽림동'>죽림동</option>
            <option value='중도동'>중도동</option>
            <option value='중앙로1가'>중앙로1가</option>
            <option value='중앙로2가'>중앙로2가</option>
            <option value='중앙로3가'>중앙로3가</option>
            <option value='칠전동'>칠전동</option>
            <option value='퇴계동'>퇴계동</option>
            <option value='효자동'>효자동</option>
            <option value='후평동'>후평동</option>
        `;
    }else if (citySelect.value=== '강원도' && districtSelect.value === '태백시') {
        addressselect.innerHTML = `
            <option value='금천동'>금천동</option>
            <option value='동점동'>동점동</option>
            <option value='문곡동'>문곡동</option>
            <option value='백산동'>백산동</option>
            <option value='상사미동'>상사미동</option>
            <option value='소도동'>소도동</option>
            <option value='원동'>원동</option>
            <option value='장성동'>장성동</option>
            <option value='적각동'>적각동</option>
            <option value='조탄동'>조탄동</option>
            <option value='창죽동'>창죽동</option>
            <option value='철암동'>철암동</option>
            <option value='통동'>통동</option>
            <option value='하사미동'>하사미동</option>
            <option value='혈동'>혈동</option>
            <option value='화전동'>화전동</option>
            <option value='황지동'>황지동</option>
        `;
    }
    else if (citySelect.value=== '강원도' && districtSelect.value === '평창군') {
        addressselect.innerHTML = `
            <option value='대관령면'>대관령면</option>
            <option value='대화면'>대화면</option>
            <option value='미탄면'>미탄면</option>
            <option value='방림면'>방림면</option>
            <option value='봉평면'>봉평면</option>
            <option value='용평면'>용평면</option>
            <option value='진부면'>진부면</option>
            <option value='평창읍'>평창읍</option>
        `;
    }
    else if (citySelect.value=== '강원도' && districtSelect.value === '홍천군') {
        addressselect.innerHTML = `
            <option value='남면'>남면</option>
            <option value='내면'>내면</option>
            <option value='내촌면'>내촌면</option>
            <option value='두촌면'>두촌면</option>
            <option value='북방면'>북방면</option>
            <option value='서면'>서면</option>
            <option value='서석면'>서석면</option>
            <option value='영귀미면'>영귀미면</option>
            <option value='홍천읍'>홍천읍</option>
            <option value='화촌면'>화촌면</option>
        `;
    }else if (citySelect.value=== '강원도' && districtSelect.value === '횡성군') {
        addressselect.innerHTML = `
            <option value='갑천면'>갑천면</option>
            <option value='강림면'>강림면</option>
            <option value='공근면'>공근면</option>
            <option value='둔내면'>둔내면</option>
            <option value='서원면'>서원면</option>
            <option value='안흥면'>안흥면</option>
            <option value='우천면'>우천면</option>
            <option value='청일면'>청일면</option>
            <option value='횡성읍'>횡성읍</option>
        `;
    }else if (citySelect.value=== '충청북도' && districtSelect.value === '청주시 상당구') {
        addressselect.innerHTML = `
            <option value='영동'>영동</option>
            <option value='북문로1가'>북문로1가</option>
            <option value='북문로2가'>북문로2가</option>
            <option value='북문로3가'>북문로3가</option>
            <option value='남문로1가'>남문로1가</option>
            <option value='남문로2가'>남문로2가</option>
            <option value='문화동'>문화동</option>
            <option value='서운동'>서운동</option>
            <option value='서문동'>서문동</option>
            <option value='남주동'>남주동</option>
            <option value='석교동'>석교동</option>
            <option value='수동'>수동</option>
            <option value='탑동'>탑동</option>
            <option value='대성동'>대성동</option>
            <option value='영운동'>영운동</option>
            <option value='금천동'>금천동</option>
            <option value='용담동'>용담동</option>
            <option value='명암동'>명암동</option>
            <option value='산성동'>산성동</option>
            <option value='용암동'>용암동</option>
            <option value='용정동'>용정동</option>
            <option value='방서동'>방서동</option>
            <option value='평촌동'>평촌동</option>
            <option value='지북동'>지북동</option>
            <option value='운동동'>운동동</option>
            <option value='월오동'>월오동</option>
            <option value='낭성면'>낭성면</option>
        `;
    }
    else if (citySelect.value=== '충청북도' && districtSelect.value === '청주시 서원구') {
        addressselect.innerHTML = `
            <option value='사직동'>사직동</option>
            <option value='사창동'>사창동</option>
            <option value='모충동'>모충동</option>
            <option value='산남동'>산남동</option>
            <option value='미평동'>미평동</option>
            <option value='분평동'>분평동</option>
            <option value='수곡동'>수곡동</option>
            <option value='성화동'>성화동</option>
            <option value='개신동'>개신동</option>
            <option value='죽림동'>죽림동</option>
            <option value='장성동'>장성동</option>
            <option value='장암동'>장암동</option>
            <option value='남이면'>남이면</option>
            <option value='현도면'>현도면</option>
        `;
    }
    else if (citySelect.value=== '충청북도' && districtSelect.value === '청주시 흥덕구') {
        addressselect.innerHTML = `
            <option value='운천동'>운천동</option>
            <option value='신봉동'>신봉동</option>
            <option value='가경동'>가경동</option>
            <option value='복대동'>복대동</option>
            <option value='봉명동'>봉명동</option>
            <option value='송정동'>송정동</option>
            <option value='강서동'>강서동</option>
            <option value='석곡동'>석곡동</option>
            <option value='휴암동'>휴암동</option>
            <option value='신전동'>신전동</option>
            <option value='현암동'>현암동</option>
            <option value='동막동'>동막동</option>
            <option value='수의동'>수의동</option>
            <option value='지동동'>지동동</option>
            <option value='서촌동'>서촌동</option>
            <option value='신성동'>신성동</option>
            <option value='평동'>평동</option>
            <option value='신대동'>신대동</option>
            <option value='남촌동'>남촌동</option>
            <option value='내곡동'>내곡동</option>
            <option value='상신동'>상신동</option>
            <option value='원평동'>원평동</option>
            <option value='문암동'>문암동</option>
            <option value='송절동'>송절동</option>
            <option value='화계동'>화계동</option>
            <option value='외북동'>외북동</option>
            <option value='향정동'>향정동</option>
            <option value='비하동'>비하동</option>
            <option value='석소동'>석소동</option>
            <option value='정봉동'>정봉동</option>
            <option value='신촌동'>신촌동</option>
            <option value='오송읍'>오송읍</option>
            <option value='강내면'>강내면</option>
            <option value='옥산면'>옥산면</option>
        `;
    }
    else if (citySelect.value=== '충청북도' && districtSelect.value === '청주시 청원구') {
        addressselect.innerHTML = `
            <option value='우암동'>우암동</option>
            <option value='내덕동'>내덕동</option>
            <option value='율량동'>율량동</option>
            <option value='사천동'>사천동</option>
            <option value='주성동'>주성동</option>
            <option value='주중동'>주중동</option>
            <option value='정상동'>정상동</option>
            <option value='정하동'>정하동</option>
            <option value='정북동'>정북동</option>
            <option value='오동동'>오동동</option>
            <option value='외남동'>외남동</option>
            <option value='외평동'>외평동</option>
            <option value='외하동'>외하동</option>
            <option value='내수읍'>내수읍</option>
            <option value='오창읍'>오창읍</option>
            <option value='북이면'>북이면</option>
        `;
    }else if (citySelect.value=== '충청북도' && districtSelect.value === '괴산군') {
        addressselect.innerHTML = `
            <option value='감물면'>감물면</option>
            <option value='괴산읍'>괴산읍</option>
            <option value='문광면'>문광면</option>
            <option value='불정면'>불정면</option>
            <option value='사리면'>사리면</option>
            <option value='소수면'>소수면</option>
            <option value='연풍면'>연풍면</option>
            <option value='장연면'>장연면</option>
            <option value='청안면'>청안면</option>
            <option value='청천면'>청천면</option>
            <option value='칠성면'>칠성면</option>
        `;
    }else if (citySelect.value=== '충청북도' && districtSelect.value === '단양군') {
        addressselect.innerHTML = `
            <option value='가곡면'>가곡면</option>
            <option value='단성면'>단성면</option>
            <option value='단양읍'>단양읍</option>
            <option value='대강면'>대강면</option>
            <option value='매포읍'>매포읍</option>
            <option value='어상천면'>어상천면</option>
            <option value='영춘면'>영춘면</option>
            <option value='적성면'>적성면</option>
        `;
    }else if (citySelect.value=== '충청북도' && districtSelect.value === '보은군') {
        addressselect.innerHTML = `
            <option value='내북면'>내북면</option>
            <option value='마로면'>마로면</option>
            <option value='보은읍'>보은읍</option>
            <option value='산외면'>산외면</option>
            <option value='삼승면'>삼승면</option>
            <option value='속리산면'>속리산면</option>
            <option value='수한면'>수한면</option>
            <option value='장안면'>장안면</option>
            <option value='탄부면'>탄부면</option>
            <option value='회남면'>회남면</option>
            <option value='회인면'>회인면</option>
        `;
    }else if (citySelect.value=== '충청북도' && districtSelect.value === '영동군') {
        addressselect.innerHTML = `
            <option value='매곡면'>매곡면</option>
            <option value='상촌면'>상촌면</option>
            <option value='심천면'>심천면</option>
            <option value='양강면'>양강면</option>
            <option value='양산면'>양산면</option>
            <option value='영동읍'>영동읍</option>
            <option value='용산면'>용산면</option>
            <option value='용화면'>용화면</option>
            <option value='추풍령면'>추풍령면</option>
            <option value='학산면'>학산면</option>
            <option value='황간면'>황간면</option>
        `;
    }else if (citySelect.value=== '충청북도' && districtSelect.value === '옥천군') {
        addressselect.innerHTML = `
            <option value='군북면'>군북면</option>
            <option value='군서면'>군서면</option>
            <option value='동이면'>동이면</option>
            <option value='안남면'>안남면</option>
            <option value='안내면'>안내면</option>
            <option value='옥천읍'>옥천읍</option>
            <option value='이원면'>이원면</option>
            <option value='청산면'>청산면</option>
            <option value='청성면'>청성면</option>
        `;
    }else if (citySelect.value=== '충청북도' && districtSelect.value === '음성군') {
        addressselect.innerHTML = `
            <option value='감곡면'>감곡면</option>
            <option value='금왕읍'>금왕읍</option>
            <option value='대소면'>대소면</option>
            <option value='맹동면'>맹동면</option>
            <option value='삼성면'>삼성면</option>
            <option value='생극면'>생극면</option>
            <option value='소이면'>소이면</option>
            <option value='원남면'>원남면</option>
            <option value='음성읍'>음성읍</option>
        `;
    }else if (citySelect.value=== '충청북도' && districtSelect.value === '제천시') {
        addressselect.innerHTML = `
            <option value='강제동'>강제동</option>
            <option value='고명동'>고명동</option>
            <option value='고암동'>고암동</option>
            <option value='교동'>교동</option>
            <option value='금성면'>금성면</option>
            <option value='남천동'>남천동</option>
            <option value='대랑동'>대랑동</option>
            <option value='덕산면'>덕산면</option>
            <option value='동현동'>동현동</option>
            <option value='두학동'>두학동</option>
            <option value='명동'>명동</option>
            <option value='명지동'>명지동</option>
            <option value='모산동'>모산동</option>
            <option value='백운면'>백운면</option>
            <option value='봉양읍'>봉양읍</option>
            <option value='산곡동'>산곡동</option>
            <option value='서부동'>서부동</option>
            <option value='송학면'>송학면</option>
            <option value='수산면'>수산면</option>
            <option value='신동'>신동</option>
            <option value='신백동'>신백동</option>
            <option value='신월동'>신월동</option>
            <option value='영천동'>영천동</option>
            <option value='왕암동'>왕암동</option>
            <option value='의림동'>의림동</option>
            <option value='자작동'>자작동</option>
            <option value='장락동'>장락동</option>
            <option value='중앙로1가'>중앙로1가</option>
            <option value='중앙로2가'>중앙로2가</option>
            <option value='천남동'>천남동</option>
            <option value='청전동'>청전동</option>
            <option value='청풍면'>청풍면</option>
            <option value='하소동'>하소동</option>
            <option value='한수면'>한수면</option>
            <option value='화산동'>화산동</option>
            <option value='흑석동'>흑석동</option>
        `;
    }else if (citySelect.value=== '충청북도' && districtSelect.value === '증평군') {
        addressselect.innerHTML = `
            <option value='도안면'>도안면</option>
            <option value='증평읍'>증평읍</option>
        `;
    }else if (citySelect.value=== '충청북도' && districtSelect.value === '진천군') {
        addressselect.innerHTML = `
            <option value='광혜원면'>광혜원면</option>
            <option value='덕산읍'>덕산읍</option>
            <option value='문백면'>문백면</option>
            <option value='백곡면'>백곡면</option>
            <option value='이월면'>이월면</option>
            <option value='진천읍'>진천읍</option>
            <option value='초평면'>초평면</option>
        `;
    }else if (citySelect.value=== '충청북도' && districtSelect.value === '충주시') {
        addressselect.innerHTML = `
            <option value='가주동'>가주동</option>
            <option value='교현동'>교현동</option>
            <option value='금가면'>금가면</option>
            <option value='금릉동'>금릉동</option>
            <option value='노은면'>노은면</option>
            <option value='단월동'>단월동</option>
            <option value='달천동'>달천동</option>
            <option value='대소원면'>대소원면</option>
            <option value='동량면'>동량면</option>
            <option value='목벌동'>목벌동</option>
            <option value='목행동'>목행동</option>
            <option value='문화동'>문화동</option>
            <option value='봉방동'>봉방동</option>
            <option value='산척면'>산척면</option>
            <option value='살미면'>살미면</option>
            <option value='성남동'>성남동</option>
            <option value='성내동'>성내동</option>
            <option value='성서동'>성서동</option>
            <option value='소태면'>소태면</option>
            <option value='수안보면'>수안보면</option>
            <option value='신니면'>신니면</option>
            <option value='안림동'>안림동</option>
            <option value='앙성면'>앙성면</option>
            <option value='엄정면'>엄정면</option>
            <option value='연수동'>연수동</option>
            <option value='용관동'>용관동</option>
            <option value='용두동'>용두동</option>
            <option value='용산동'>용산동</option>
            <option value='용탄동'>용탄동</option>
            <option value='종민동'>종민동</option>
            <option value='주덕읍'>주덕읍</option>
            <option value='중앙탑면'>중앙탑면</option>
            <option value='지현동'>지현동</option>
            <option value='직동'>직동</option>
            <option value='충의동'>충의동</option>
            <option value='충인동'>충인동</option>
            <option value='칠금동'>칠금동</option>
            <option value='풍동'>풍동</option>
            <option value='호암동'>호암동</option>
        `;
    }else if (citySelect.value=== '충청남도' && districtSelect.value === '천안시 동남구') {
        addressselect.innerHTML = `
            <option value='광덕면'>광덕면</option>
            <option value='구룡동'>구룡동</option>
            <option value='구성동'>구성동</option>
            <option value='다가동'>다가동</option>
            <option value='대흥동'>대흥동</option>
            <option value='동면'>동면</option>
            <option value='목천읍'>목천읍</option>
            <option value='문화동'>문화동</option>
            <option value='병천면'>병천면</option>
            <option value='봉명동'>봉명동</option>
        `;
    }else if (citySelect.value=== '충청남도' && districtSelect.value === '천안시 서북구') {
        addressselect.innerHTML = `
            <option value='두정동'>두정동</option>
            <option value='백석동'>백석동</option>
            <option value='부대동'>부대동</option>
            <option value='불당동'>불당동</option>
            <option value='성거읍'>성거읍</option>
            <option value='성성동'>성성동</option>
            <option value='성정동'>성정동</option>
            <option value='성환읍'>성환읍</option>
            <option value='신당동'>신당동</option>
            <option value='쌍용동'>쌍용동</option>
            <option value='업성동'>업성동</option>
            <option value='와촌동'>와촌동</option>
            <option value='입장면'>입장면</option>
            <option value='직산읍'>직산읍</option>
            <option value='차암동'>차암동</option>
        `;
    }else if (citySelect.value=== '충청남도' && districtSelect.value === '계룡시') {
        addressselect.innerHTML = `
            <option value='금암동'>금암동</option>
            <option value='두마면'>두마면</option>
            <option value='신도안면'>신도안면</option>
            <option value='엄사면'>엄사면</option>
        `;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '공주시') {
        addressselect.innerHTML = `
            <option value='검상동'>검상동</option>
            <option value='계룡면'>계룡면</option>
            <option value='교동'>교동</option>
            <option value='금성동'>금성동</option>
            <option value='금학동'>금학동</option>
            <option value='금흥동'>금흥동</option>
            <option value='동현동'>동현동</option>
            <option value='무릉동'>무릉동</option>
            <option value='반죽동'>반죽동</option>
            <option value='반포면'>반포면</option>
            <option value='봉정동'>봉정동</option>
            <option value='봉황동'>봉황동</option>
            <option value='사곡면'>사곡면</option>
            <option value='산성동'>산성동</option>
            <option value='상왕동'>상왕동</option>
            <option value='석장리동'>석장리동</option>
            <option value='소학동'>소학동</option>
            <option value='송선동'>송선동</option>
            <option value='신관동'>신관동</option>
            <option value='신기동'>신기동</option>
            <option value='신풍면'>신풍면</option>
            <option value='쌍신동'>쌍신동</option>
            <option value='오곡동'>오곡동</option>
            <option value='옥룡동'>옥룡동</option>
            <option value='우성면'>우성면</option>
            <option value='웅진동'>웅진동</option>
            <option value='월미동'>월미동</option>
            <option value='월송동'>월송동</option>
            <option value='유구읍'>유구읍</option>
            <option value='의당면'>의당면</option>
            <option value='이인면'>이인면</option>
            <option value='정안면'>정안면</option>
            <option value='주미동'>주미동</option>
            <option value='중동'>중동</option>
            <option value='중학동'>중학동</option>
            <option value='탄천면'>탄천면</option>
            <option value='태봉동'>태봉동</option>
        `;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '금산군') {
        addressselect.innerHTML = `
            <option value='군북면'>군북면</option>
            <option value='금산읍'>금산읍</option>
            <option value='금성면'>금성면</option>
            <option value='남이면'>남이면</option>
            <option value='남일면'>남일면</option>
            <option value='복수면'>복수면</option>
            <option value='부리면'>부리면</option>
            <option value='제원면'>제원면</option>
            <option value='진산면'>진산면</option>
            <option value='추부면'>추부면</option>
        `;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '논산시') {
        addressselect.innerHTML = `
            <option value='가야곡면'>가야곡면</option>
            <option value='강경읍'>강경읍</option>
            <option value='강산동'>강산동</option>
            <option value='관촉동'>관촉동</option>
            <option value='광석면'>광석면</option>
            <option value='내동'>내동</option>
            <option value='노성면'>노성면</option>
            <option value='대교동'>대교동</option>
            <option value='덕지동'>덕지동</option>
            <option value='등화동'>등화동</option>
            <option value='반월동'>반월동</option>
            <option value='벌곡면'>벌곡면</option>
            <option value='부적면'>부적면</option>
            <option value='부창동'>부창동</option>
            <option value='상월면'>상월면</option>
            <option value='성동면'>성동면</option>
            <option value='양촌면'>양촌면</option>
            <option value='연무읍'>연무읍</option>
            <option value='연산면'>연산면</option>
            <option value='은진면'>은진면</option>
            <option value='지산동'>지산동</option>
            <option value='채운면'>채운면</option>
            <option value='취암동'>취암동</option>
            <option value='화지동'>화지동</option>
        `;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '당진시') {
        addressselect.innerHTML = `
            <option value='고대면'>고대면</option>
            <option value='구룡동'>구룡동</option>
            <option value='대덕동'>대덕동</option>
            <option value='대호지면'>대호지면</option>
            <option value='면천면'>면천면</option>
            <option value='사기소동'>사기소동</option>
            <option value='석문면'>석문면</option>
            <option value='송산면'>송산면</option>
            <option value='송악읍'>송악읍</option>
            <option value='수청동'>수청동</option>
            <option value='순성면'>순성면</option>
            <option value='시곡동'>시곡동</option>
            <option value='신평면'>신평면</option>
            <option value='용연동'>용연동</option>
            <option value='우강면'>우강면</option>
            <option value='우두동'>우두동</option>
            <option value='원당동'>원당동</option>
            <option value='읍내동'>읍내동</option>
            <option value='정미면'>정미면</option>
        `;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '보령시') {
        addressselect.innerHTML = `
            <option value='궁촌동'>궁촌동</option>
            <option value='남곡동'>남곡동</option>
            <option value='남포면'>남포면</option>
            <option value='내항동'>내항동</option>
            <option value='대천동'>대천동</option>
            <option value='동대동'>동대동</option>
            <option value='명천동'>명천동</option>
            <option value='미산면'>미산면</option>
            <option value='성주면'>성주면</option>
            <option value='신흑동'>신흑동</option>
            <option value='오천면'>오천면</option>
            <option value='요암동'>요암동</option>
            <option value='웅천읍'>웅천읍</option>
            <option value='주교면'>주교면</option>
            <option value='주산면'>주산면</option>
            <option value='주포면'>주포면</option>
            <option value='죽정동'>죽정동</option>
            <option value='천북면'>천북면</option>
            <option value='청라면'>청라면</option>
            <option value='청소면'>청소면</option>
            <option value='화산동'>화산동</option>
        `;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '부여군') {
        addressselect.innerHTML = `
            <option value='구룡면'>구룡면</option>
            <option value='규암면'>규암면</option>
            <option value='남면'>남면</option>
            <option value='내산면'>내산면</option>
            <option value='부여읍'>부여읍</option>
            <option value='석성면'>석성면</option>
            <option value='세도면'>세도면</option>
            <option value='양화면'>양화면</option>
            <option value='옥산면'>옥산면</option>
            <option value='외산면'>외산면</option>
            <option value='은산면'>은산면</option>
            <option value='임천면'>임천면</option>
            <option value='장암면'>장암면</option>
            <option value='초촌면'>초촌면</option>
            <option value='충화면'>충화면</option>
            <option value='홍산면'>홍산면</option>
        `;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '서산시') {
        addressselect.innerHTML = `
            <option value='갈산동'>갈산동</option>
            <option value='고북면'>고북면</option>
            <option value='대산읍'>대산읍</option>
            <option value='덕지천동'>덕지천동</option>
            <option value='동문동'>동문동</option>
            <option value='부석면'>부석면</option>
            <option value='석남동'>석남동</option>
            <option value='석림동'>석림동</option>
            <option value='성연면'>성연면</option>
            <option value='수석동'>수석동</option>
            <option value='양대동'>양대동</option>
            <option value='예천동'>예천동</option>
            <option value='오남동'>오남동</option>
            <option value='온석동'>온석동</option>
            <option value='운산면'>운산면</option>
            <option value='음암면'>음암면</option>
            <option value='인지면'>인지면</option>
            <option value='잠홍동'>잠홍동</option>
            <option value='장동'>장동</option>
            <option value='죽성동'>죽성동</option>
            <option value='지곡면'>지곡면</option>
            <option value='팔봉면'>팔봉면</option>
            <option value='해미면'>해미면</option>
        `;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '서천군') {
        addressselect.innerHTML = `
            <option value='기산면'>기산면</option>
            <option value='마산면'>마산면</option>
            <option value='마서면'>마서면</option>
            <option value='문산면'>문산면</option>
            <option value='비인면'>비인면</option>
            <option value='서면'>서면</option>
            <option value='서천읍'>서천읍</option>
            <option value='시초면'>시초면</option>
            <option value='장항읍'>장항읍</option>
            <option value='종천면'>종천면</option>
            <option value='판교면'>판교면</option>
            <option value='한산면'>한산면</option>
            <option value='화양면'>화양면</option>
        `;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '아산시') {
        addressselect.innerHTML = `
            <option value='권곡동'>권곡동</option>
            <option value='기산동'>기산동</option>
            <option value='남동'>남동</option>
            <option value='도고면'>도고면</option>
            <option value='둔포면'>둔포면</option>
            <option value='득산동'>득산동</option>
            <option value='모종동'>모종동</option>
            <option value='방축동'>방축동</option>
            <option value='배미동'>배미동</option>
            <option value='배방읍'>배방읍</option>
            <option value='법곡동'>법곡동</option>
            <option value='선장면'>선장면</option>
            <option value='송악면'>송악면</option>
            <option value='신동'>신동</option>
            <option value='신인동'>신인동</option>
            <option value='신창면'>신창면</option>
            <option value='실옥동'>실옥동</option>
            <option value='염치읍'>염치읍</option>
            <option value='영인면'>영인면</option>
            <option value='온천동'>온천동</option>
            <option value='용화동'>용화동</option>
            <option value='음봉면'>음봉면</option>
            <option value='인주면'>인주면</option>
            <option value='장존동'>장존동</option>
            <option value='점양동'>점양동</option>
            <option value='좌부동'>좌부동</option>
            <option value='초사동'>초사동</option>
            <option value='탕정면'>탕정면</option>
            <option value='풍기동'>풍기동</option>
        `;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '예산군') {
        addressselect.innerHTML = `
            <option value='고덕면'>고덕면</option>
            <option value='광시면'>광시면</option>
            <option value='대술면'>대술면</option>
            <option value='대흥면'>대흥면</option>
            <option value='덕산면'>덕산면</option>
            <option value='봉산면'>봉산면</option>
            <option value='삽교읍'>삽교읍</option>
            <option value='신암면'>신암면</option>
            <option value='신양면'>신양면</option>
            <option value='예산읍'>예산읍</option>
            <option value='오가면'>오가면</option>
            <option value='응봉면'>응봉면</option>
        `;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '청양군') {
        addressselect.innerHTML = `
            <option value='남양면'>남양면</option>
            <option value='대치면'>대치면</option>
            <option value='목면'>목면</option>
            <option value='비봉면'>비봉면</option>
            <option value='운곡면'>운곡면</option>
            <option value='장평면'>장평면</option>
            <option value='정산면'>정산면</option>
            <option value='청남면'>청남면</option>
            <option value='청양읍'>청양읍</option>
            <option value='화성면'>화성면</option>
        `;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '태안군') {
        addressselect.innerHTML = `
		<option value='고남면'>고남면</option>
		<option value='근흥면'>근흥면</option>
		<option value='소원면'>소원면</option>
		<option value='안면읍'>안면읍</option>
		<option value='원북면'>원북면</option>
		<option value='이원면'>이원면</option>
		<option value='태안읍'>태안읍</option>
	`;
    }
    else if (citySelect.value=== '충청남도' && districtSelect.value === '홍성군') {
        addressselect.innerHTML = `
            <option value='갈산면'>갈산면</option>
            <option value='결성면'>결성면</option>
            <option value='광천읍'>광천읍</option>
            <option value='구항면'>구항면</option>
            <option value='금마면'>금마면</option>
            <option value='서부면'>서부면</option>
            <option value='은하면'>은하면</option>
            <option value='장곡면'>장곡면</option>
            <option value='홍동면'>홍동면</option>
            <option value='홍북읍'>홍북읍</option>
            <option value='홍성읍'>홍성읍</option>
        `;
    }else if (citySelect.value=== '전라북도' && districtSelect.value === '고창군') {
        addressselect.innerHTML = `
            <option value='고수면'>고수면</option>
            <option value='고창읍'>고창읍</option>
            <option value='공음면'>공음면</option>
            <option value='대산면'>대산면</option>
            <option value='무장면'>무장면</option>
            <option value='부안면'>부안면</option>
            <option value='상하면'>상하면</option>
            <option value='성내면'>성내면</option>
            <option value='성송면'>성송면</option>
            <option value='신림면'>신림면</option>
            <option value='심원면'>심원면</option>
            <option value='아산면'>아산면</option>
            <option value='해리면'>해리면</option>
            <option value='흥덕면'>흥덕면</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '군산시') {
        addressselect.innerHTML = `
            <option value='개복동'>개복동</option>
            <option value='개사동'>개사동</option>
            <option value='개정동'>개정동</option>
            <option value='개정면'>개정면</option>
            <option value='경암동'>경암동</option>
            <option value='경장동'>경장동</option>
            <option value='구암동'>구암동</option>
            <option value='금광동'>금광동</option>
            <option value='금동'>금동</option>
            <option value='금암동'>금암동</option>
            <option value='나운동'>나운동</option>
            <option value='나포면'>나포면</option>
            <option value='내초동'>내초동</option>
            <option value='내흥동'>내흥동</option>
            <option value='대명동'>대명동</option>
            <option value='대야면'>대야면</option>
            <option value='동흥남동'>동흥남동</option>
            <option value='둔율동'>둔율동</option>
            <option value='명산동'>명산동</option>
            <option value='문화동'>문화동</option>
            <option value='미룡동'>미룡동</option>
            <option value='미원동'>미원동</option>
            <option value='미장동'>미장동</option>
            <option value='비응도동'>비응도동</option>
            <option value='사정동'>사정동</option>
            <option value='산북동'>산북동</option>
            <option value='삼학동'>삼학동</option>
            <option value='서수면'>서수면</option>
            <option value='서흥남동'>서흥남동</option>
            <option value='선양동'>선양동</option>
            <option value='성산면'>성산면</option>
            <option value='소룡동'>소룡동</option>
            <option value='송창동'>송창동</option>
            <option value='송풍동'>송풍동</option>
            <option value='수송동'>수송동</option>
            <option value='신관동'>신관동</option>
            <option value='신영동'>신영동</option>
            <option value='신창동'>신창동</option>
            <option value='신풍동'>신풍동</option>
            <option value='신흥동'>신흥동</option>
            <option value='영동'>영동</option>
            <option value='영화동'>영화동</option>
            <option value='오룡동'>오룡동</option>
            <option value='오식도동'>오식도동</option>
            <option value='옥구읍'>옥구읍</option>
            <option value='옥도면'>옥도면</option>
            <option value='옥산면'>옥산면</option>
            <option value='옥서면'>옥서면</option>
            <option value='월명동'>월명동</option>
            <option value='임피면'>임피면</option>
            <option value='장미동'>장미동</option>
            <option value='장재동'>장재동</option>
            <option value='조촌동'>조촌동</option>
            <option value='죽성동'>죽성동</option>
            <option value='중동'>중동</option>
            <option value='중앙로1가'>중앙로1가</option>
            <option value='중앙로2가'>중앙로2가</option>
            <option value='중앙로3가'>중앙로3가</option>
            <option value='지곡동'>지곡동</option>
            <option value='창성동'>창성동</option>
            <option value='평화동'>평화동</option>
            <option value='해망동'>해망동</option>
            <option value='회현면'>회현면</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '김제시') {
        addressselect.innerHTML = `
            <option value='갈공동'>갈공동</option>
            <option value='검산동'>검산동</option>
            <option value='광활면'>광활면</option>
            <option value='교동'>교동</option>
            <option value='금구면'>금구면</option>
            <option value='금산면'>금산면</option>
            <option value='난봉동'>난봉동</option>
            <option value='도장동'>도장동</option>
            <option value='만경읍'>만경읍</option>
            <option value='명덕동'>명덕동</option>
            <option value='백구면'>백구면</option>
            <option value='백산면'>백산면</option>
            <option value='백학동'>백학동</option>
            <option value='복죽동'>복죽동</option>
            <option value='봉남면'>봉남면</option>
            <option value='부량면'>부량면</option>
            <option value='상동동'>상동동</option>
            <option value='서암동'>서암동</option>
            <option value='서정동'>서정동</option>
            <option value='성덕면'>성덕면</option>
            <option value='순동'>순동</option>
            <option value='신곡동'>신곡동</option>
            <option value='신덕동'>신덕동</option>
            <option value='신월동'>신월동</option>
            <option value='양전동'>양전동</option>
            <option value='연정동'>연정동</option>
            <option value='오정동'>오정동</option>
            <option value='옥산동'>옥산동</option>
            <option value='요촌동'>요촌동</option>
            <option value='용동'>용동</option>
            <option value='용지면'>용지면</option>
            <option value='월봉동'>월봉동</option>
            <option value='월성동'>월성동</option>
            <option value='입석동'>입석동</option>
            <option value='장화동'>장화동</option>
            <option value='제월동'>제월동</option>
            <option value='죽산면'>죽산면</option>
            <option value='진봉면'>진봉면</option>
            <option value='청하면'>청하면</option>
            <option value='하동'>하동</option>
            <option value='황산동'>황산동</option>
            <option value='황산면'>황산면</option>
            <option value='흥사동'>흥사동</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '남원시') {
        addressselect.innerHTML = `
            <option value='갈치동'>갈치동</option>
            <option value='고죽동'>고죽동</option>
            <option value='광치동'>광치동</option>
            <option value='금지면'>금지면</option>
            <option value='내척동'>내척동</option>
            <option value='노암동'>노암동</option>
            <option value='대강면'>대강면</option>
            <option value='덕과면'>덕과면</option>
            <option value='도통동'>도통동</option>
            <option value='동충동'>동충동</option>
            <option value='보절면'>보절면</option>
            <option value='사매면'>사매면</option>
            <option value='산곡동'>산곡동</option>
            <option value='산내면'>산내면</option>
            <option value='산동면'>산동면</option>
            <option value='송동면'>송동면</option>
            <option value='수지면'>수지면</option>
            <option value='식정동'>식정동</option>
            <option value='신정동'>신정동</option>
            <option value='쌍교동'>쌍교동</option>
            <option value='아영면'>아영면</option>
            <option value='어현동'>어현동</option>
            <option value='왕정동'>왕정동</option>
            <option value='운주면'>운주면</option>
            <option value='월락동'>월락동</option>
            <option value='이백면'>이백면</option>
            <option value='인월면'>인월면</option>
            <option value='조산동'>조산동</option>
            <option value='주생면'>주생면</option>
            <option value='주천면'>주천면</option>
            <option value='죽항동'>죽항동</option>
            <option value='천거동'>천거동</option>
            <option value='하정동'>하정동</option>
            <option value='향교동'>향교동</option>
            <option value='화정동'>화정동</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '무주군') {
        addressselect.innerHTML = `
            <option value='무주읍'>무주읍</option>
            <option value='무풍면'>무풍면</option>
            <option value='부남면'>부남면</option>
            <option value='설천면'>설천면</option>
            <option value='안성면'>안성면</option>
            <option value='적상면'>적상면</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '부안군') {
        addressselect.innerHTML = `
            <option value='계화면'>계화면</option>
            <option value='동진면'>동진면</option>
            <option value='변산면'>변산면</option>
            <option value='보안면'>보안면</option>
            <option value='부안읍'>부안읍</option>
            <option value='상서면'>상서면</option>
            <option value='위도면'>위도면</option>
            <option value='주산면'>주산면</option>
            <option value='줄포면'>줄포면</option>
            <option value='진서면'>진서면</option>
            <option value='하서면'>하서면</option>
            <option value='행안면'>행안면</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '순창군') {
        addressselect.innerHTML = `
            <option value='구림면'>구림면</option>
            <option value='금과면'>금과면</option>
            <option value='동계면'>동계면</option>
            <option value='복흥면'>복흥면</option>
            <option value='순창읍'>순창읍</option>
            <option value='쌍치면'>쌍치면</option>
            <option value='유등면'>유등면</option>
            <option value='인계면'>인계면</option>
            <option value='적성면'>적성면</option>
            <option value='팔덕면'>팔덕면</option>
            <option value='풍산면'>풍산면</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '완주군') {
        addressselect.innerHTML = `
            <option value='경천면'>경천면</option>
            <option value='고산면'>고산면</option>
            <option value='구이면'>구이면</option>
            <option value='동상면'>동상면</option>
            <option value='봉동읍'>봉동읍</option>
            <option value='비봉면'>비봉면</option>
            <option value='삼례읍'>삼례읍</option>
            <option value='상관면'>상관면</option>
            <option value='소양면'>소양면</option>
            <option value='용진읍'>용진읍</option>
            <option value='운주면'>운주면</option>
            <option value='이서면'>이서면</option>
            <option value='화산면'>화산면</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '익산시') {
        addressselect.innerHTML = `
            <option value='갈산동'>갈산동</option>
            <option value='금강동'>금강동</option>
            <option value='금마면'>금마면</option>
            <option value='남중동'>남중동</option>
            <option value='낭산면'>낭산면</option>
            <option value='덕기동'>덕기동</option>
            <option value='동산동'>동산동</option>
            <option value='마동'>마동</option>
            <option value='만석동'>만석동</option>
            <option value='망성면'>망성면</option>
            <option value='모현동1가'>모현동1가</option>
            <option value='모현동2가'>모현동2가</option>
            <option value='목천동'>목천동</option>
            <option value='부송동'>부송동</option>
            <option value='삼기면'>삼기면</option>
            <option value='석암동'>석암동</option>
            <option value='석왕동'>석왕동</option>
            <option value='석탄동'>석탄동</option>
            <option value='성당면'>성당면</option>
            <option value='송학동'>송학동</option>
            <option value='신동'>신동</option>
            <option value='신용동'>신용동</option>
            <option value='신창동'>신창동</option>
            <option value='어양동'>어양동</option>
            <option value='여산면'>여산면</option>
            <option value='영등동'>영등동</option>
            <option value='오산면'>오산면</option>
            <option value='왕궁면'>왕궁면</option>
            <option value='용동면'>용동면</option>
            <option value='용안면'>용안면</option>
            <option value='용제동'>용제동</option>
            <option value='웅포면'>웅포면</option>
            <option value='은기동'>은기동</option>
            <option value='인화동1가'>인화동1가</option>
            <option value='인화동2가'>인화동2가</option>
            <option value='임상동'>임상동</option>
            <option value='정족동'>정족동</option>
            <option value='주현동'>주현동</option>
            <option value='중앙동1가'>중앙동1가</option>
            <option value='중앙동2가'>중앙동2가</option>
            <option value='중앙동3가'>중앙동3가</option>
            <option value='창인동1가'>창인동1가</option>
            <option value='창인동2가'>창인동2가</option>
            <option value='춘포면'>춘포면</option>
            <option value='팔봉동'>팔봉동</option>
            <option value='함라면'>함라면</option>
            <option value='함열읍'>함열읍</option>
            <option value='현영동'>현영동</option>
            <option value='황등면'>황등면</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '임실군') {
        addressselect.innerHTML = `
            <option value='강진면'>강진면</option>
            <option value='관촌면'>관촌면</option>
            <option value='덕치면'>덕치면</option>
            <option value='삼계면'>삼계면</option>
            <option value='성수면'>성수면</option>
            <option value='신덕면'>신덕면</option>
            <option value='신평면'>신평면</option>
            <option value='오수면'>오수면</option>
            <option value='운암면'>운암면</option>
            <option value='임실읍'>임실읍</option>
            <option value='지사면'>지사면</option>
            <option value='청웅면'>청웅면</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '장수군') {
        addressselect.innerHTML = `
            <option value='계남면'>계남면</option>
            <option value='계북면'>계북면</option>
            <option value='번암면'>번암면</option>
            <option value='산서면'>산서면</option>
            <option value='장계면'>장계면</option>
            <option value='장수읍'>장수읍</option>
            <option value='천천면'>천천면</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '정읍시') {
        addressselect.innerHTML = `
            <option value='감곡면'>감곡면</option>
            <option value='고부면'>고부면</option>
            <option value='공평동'>공평동</option>
            <option value='과교동'>과교동</option>
            <option value='교암동'>교암동</option>
            <option value='구룡동'>구룡동</option>
            <option value='금붕동'>금붕동</option>
            <option value='내장동'>내장동</option>
            <option value='농소동'>농소동</option>
            <option value='덕천면'>덕천면</option>
            <option value='망제동'>망제동</option>
            <option value='부전동'>부전동</option>
            <option value='북면'>북면</option>
            <option value='산내면'>산내면</option>
            <option value='산외면'>산외면</option>
            <option value='삼산동'>삼산동</option>
            <option value='상동'>상동</option>
            <option value='상평동'>상평동</option>
            <option value='소성면'>소성면</option>
            <option value='송산동'>송산동</option>
            <option value='수성동'>수성동</option>
            <option value='시기동'>시기동</option>
            <option value='신월동'>신월동</option>
            <option value='신정동'>신정동</option>
            <option value='신태인읍'>신태인읍</option>
            <option value='쌍암동'>쌍암동</option>
            <option value='연지동'>연지동</option>
            <option value='영원면'>영원면</option>
            <option value='영파동'>영파동</option>
            <option value='옹동면'>옹동면</option>
            <option value='용계동'>용계동</option>
            <option value='용산동'>용산동</option>
            <option value='이평면'>이평면</option>
            <option value='입암면'>입암면</option>
            <option value='장명동'>장명동</option>
            <option value='정우면'>정우면</option>
            <option value='진산동'>진산동</option>
            <option value='칠보면'>칠보면</option>
            <option value='태인면'>태인면</option>
            <option value='하모동'>하모동</option>
            <option value='하북동'>하북동</option>
            <option value='흑암동'>흑암동</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '진안군') {
        addressselect.innerHTML = `
            <option value='동향면'>동향면</option>
            <option value='마령면'>마령면</option>
            <option value='백운면'>백운면</option>
            <option value='부귀면'>부귀면</option>
            <option value='상전면'>상전면</option>
            <option value='안천면'>안천면</option>
            <option value='용담면'>용담면</option>
            <option value='정천면'>정천면</option>
            <option value='주천면'>주천면</option>
            <option value='진안읍'>진안읍</option>
        `;
    }else if (citySelect.value=== '전라북도' && districtSelect.value === '전주시 덕진구') {
        addressselect.innerHTML = `
            <option value='강흥동'>강흥동</option>
            <option value='고랑동'>고랑동</option>
            <option value='금상동'>금상동</option>
            <option value='금암동'>금암동</option>
            <option value='남정동'>남정동</option>
            <option value='덕진동1가'>덕진동1가</option>
            <option value='덕진동2가'>덕진동2가</option>
            <option value='도덕동'>도덕동</option>
            <option value='도도동'>도도동</option>
            <option value='만성동'>만성동</option>
            <option value='반월동'>반월동</option>
            <option value='산정동'>산정동</option>
            <option value='성덕동'>성덕동</option>
            <option value='송천동1가'>송천동1가</option>
            <option value='송천동2가'>송천동2가</option>
            <option value='여의동'>여의동</option>
            <option value='여의동2가'>여의동2가</option>
            <option value='용정동'>용정동</option>
            <option value='우아동1가'>우아동1가</option>
            <option value='우아동2가'>우아동2가</option>
            <option value='우아동3가'>우아동3가</option>
            <option value='원동'>원동</option>
            <option value='인후동1가'>인후동1가</option>
            <option value='인후동2가'>인후동2가</option>
            <option value='장동'>장동</option>
            <option value='전미동1가'>전미동1가</option>
            <option value='전미동2가'>전미동2가</option>
            <option value='중동'>중동</option>
            <option value='진북동'>진북동</option>
            <option value='팔복동1가'>팔복동1가</option>
            <option value='팔복동2가'>팔복동2가</option>
            <option value='팔복동3가'>팔복동3가</option>
            <option value='팔복동4가'>팔복동4가</option>
            <option value='호성동1가'>호성동1가</option>
            <option value='호성동2가'>호성동2가</option>
            <option value='호성동3가'>호성동3가</option>
            <option value='화전동'>화전동</option>
        `;
    }
    else if (citySelect.value=== '전라북도' && districtSelect.value === '전주시 완산구') {
        addressselect.innerHTML = `
            <option value='경원동1가'>경원동1가</option>
            <option value='경원동2가'>경원동2가</option>
            <option value='경원동3가'>경원동3가</option>
            <option value='고사동'>고사동</option>
            <option value='교동'>교동</option>
            <option value='남노송동'>남노송동</option>
            <option value='다가동1가'>다가동1가</option>
            <option value='다가동2가'>다가동2가</option>
            <option value='다가동3가'>다가동3가</option>
            <option value='다가동4가'>다가동4가</option>
            <option value='대성동'>대성동</option>
            <option value='동서학동'>동서학동</option>
            <option value='동완산동'>동완산동</option>
            <option value='삼천동1가'>삼천동1가</option>
            <option value='삼천동2가'>삼천동2가</option>
            <option value='삼천동3가'>삼천동3가</option>
            <option value='상림동'>상림동</option>
            <option value='색장동'>색장동</option>
            <option value='서노송동'>서노송동</option>
            <option value='서서학동'>서서학동</option>
            <option value='서신동'>서신동</option>
            <option value='서완산동1가'>서완산동1가</option>
            <option value='서완산동2가'>서완산동2가</option>
            <option value='석구동'>석구동</option>
            <option value='용복동'>용복동</option>
            <option value='원당동'>원당동</option>
            <option value='전동'>전동</option>
            <option value='전동3가'>전동3가</option>
            <option value='중노송동'>중노송동</option>
            <option value='중앙동1가'>중앙동1가</option>
            <option value='중앙동2가'>중앙동2가</option>
            <option value='중앙동3가'>중앙동3가</option>
            <option value='중앙동4가'>중앙동4가</option>
            <option value='중인동'>중인동</option>
            <option value='중화산동1가'>중화산동1가</option>
            <option value='중화산동2가'>중화산동2가</option>
            <option value='태평동'>태평동</option>
            <option value='평화동1가'>평화동1가</option>
            <option value='평화동2가'>평화동2가</option>
            <option value='평화동3가'>평화동3가</option>
            <option value='풍남동1가'>풍남동1가</option>
            <option value='풍남동2가'>풍남동2가</option>
            <option value='풍남동3가'>풍남동3가</option>
            <option value='효자동1가'>효자동1가</option>
            <option value='효자동2가'>효자동2가</option>
            <option value='효자동3가'>효자동3가</option>
        `;
    }else if (citySelect.value=== '전라남도' && districtSelect.value === '강진군') {
        addressselect.innerHTML = `
            <option value='강진읍'>강진읍</option>
            <option value='군동면'>군동면</option>
            <option value='대구면'>대구면</option>
            <option value='마량면'>마량면</option>
            <option value='병영면'>병영면</option>
            <option value='성전면'>성전면</option>
            <option value='신전면'>신전면</option>
            <option value='옴천면'>옴천면</option>
            <option value='작천면'>작천면</option>
            <option value='칠량면'>칠량면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '고흥군') {
        addressselect.innerHTML = `
            <option value='고흥읍'>고흥읍</option>
            <option value='과역면'>과역면</option>
            <option value='금산면'>금산면</option>
            <option value='남양면'>남양면</option>
            <option value='대서면'>대서면</option>
            <option value='도덕면'>도덕면</option>
            <option value='도양읍'>도양읍</option>
            <option value='도화면'>도화면</option>
            <option value='동일면'>동일면</option>
            <option value='두원면'>두원면</option>
            <option value='봉래면'>봉래면</option>
            <option value='영남면'>영남면</option>
            <option value='점암면'>점암면</option>
            <option value='포두면'>포두면</option>
            <option value='풍양면'>풍양면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '곡성군') {
        addressselect.innerHTML = `
            <option value='겸면'>겸면</option>
            <option value='고달면'>고달면</option>
            <option value='곡성읍'>곡성읍</option>
            <option value='목사동면'>목사동면</option>
            <option value='삼기면'>삼기면</option>
            <option value='석곡면'>석곡면</option>
            <option value='오곡면'>오곡면</option>
            <option value='오산면'>오산면</option>
            <option value='옥과면'>옥과면</option>
            <option value='입면'>입면</option>
            <option value='죽곡면'>죽곡면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '광양시') {
        addressselect.innerHTML = `
            <option value='광양읍'>광양읍</option>
            <option value='광영동'>광영동</option>
            <option value='금호동'>금호동</option>
            <option value='다압면'>다압면</option>
            <option value='도이동'>도이동</option>
            <option value='마동'>마동</option>
            <option value='봉강면'>봉강면</option>
            <option value='성황동'>성황동</option>
            <option value='옥곡면'>옥곡면</option>
            <option value='옥룡면'>옥룡면</option>
            <option value='중군동'>중군동</option>
            <option value='중동'>중동</option>
            <option value='진상면'>진상면</option>
            <option value='진월면'>진월면</option>
            <option value='태인동'>태인동</option>
            <option value='황금동'>황금동</option>
            <option value='황길동'>황길동</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '구례군') {
        addressselect.innerHTML = `
            <option value='간전면'>간전면</option>
            <option value='광의면'>광의면</option>
            <option value='구례읍'>구례읍</option>
            <option value='마산면'>마산면</option>
            <option value='문척면'>문척면</option>
            <option value='산동면'>산동면</option>
            <option value='용방면'>용방면</option>
            <option value='토지면'>토지면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '나주시') {
        addressselect.innerHTML = `
            <option value='경현동'>경현동</option>
            <option value='공산면'>공산면</option>
            <option value='과원동'>과원동</option>
            <option value='관정동'>관정동</option>
            <option value='금계동'>금계동</option>
            <option value='금성동'>금성동</option>
            <option value='금천면'>금천면</option>
            <option value='남외동'>남외동</option>
            <option value='남평읍'>남평읍</option>
            <option value='노안면'>노안면</option>
            <option value='다도면'>다도면</option>
            <option value='다시면'>다시면</option>
            <option value='대기동'>대기동</option>
            <option value='대호동'>대호동</option>
            <option value='동강면'>동강면</option>
            <option value='동수동'>동수동</option>
            <option value='문평면'>문평면</option>
            <option value='반남면'>반남면</option>
            <option value='보산동'>보산동</option>
            <option value='봉황면'>봉황면</option>
            <option value='부덕동'>부덕동</option>
            <option value='빛가람동'>빛가람동</option>
            <option value='산포면'>산포면</option>
            <option value='삼도동'>삼도동</option>
            <option value='삼영동'>삼영동</option>
            <option value='서내동'>서내동</option>
            <option value='성북동'>성북동</option>
            <option value='세지면'>세지면</option>
            <option value='송월동'>송월동</option>
            <option value='송촌동'>송촌동</option>
            <option value='안창동'>안창동</option>
            <option value='영산동'>영산동</option>
            <option value='오량동'>오량동</option>
            <option value='왕곡면'>왕곡면</option>
            <option value='용산동'>용산동</option>
            <option value='운곡동'>운곡동</option>
            <option value='이창동'>이창동</option>
            <option value='죽림동'>죽림동</option>
            <option value='진포동'>진포동</option>
            <option value='청동'>청동</option>
            <option value='토계동'>토계동</option>
            <option value='평산동'>평산동</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '담양군') {
        addressselect.innerHTML = `
            <option value='가사문학면'>가사문학면</option>
            <option value='고서면'>고서면</option>
            <option value='금성면'>금성면</option>
            <option value='담양읍'>담양읍</option>
            <option value='대덕면'>대덕면</option>
            <option value='대전면'>대전면</option>
            <option value='무정면'>무정면</option>
            <option value='봉산면'>봉산면</option>
            <option value='수북면'>수북면</option>
            <option value='용면'>용면</option>
            <option value='월산면'>월산면</option>
            <option value='창평면'>창평면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '목포시') {
        addressselect.innerHTML = `
            <option value='경동1가'>경동1가</option>
            <option value='경동2가'>경동2가</option>
            <option value='광동1가'>광동1가</option>
            <option value='광동2가'>광동2가</option>
            <option value='광동3가'>광동3가</option>
            <option value='금동1가'>금동1가</option>
            <option value='금동2가'>금동2가</option>
            <option value='금화동'>금화동</option>
            <option value='남교동'>남교동</option>
            <option value='달동'>달동</option>
            <option value='대성동'>대성동</option>
            <option value='대안동'>대안동</option>
            <option value='대양동'>대양동</option>
            <option value='대의동1가'>대의동1가</option>
            <option value='대의동2가'>대의동2가</option>
            <option value='대의동3가'>대의동3가</option>
            <option value='동명동'>동명동</option>
            <option value='만호동'>만호동</option>
            <option value='명륜동'>명륜동</option>
            <option value='무안동'>무안동</option>
            <option value='보광동1가'>보광동1가</option>
            <option value='보광동2가'>보광동2가</option>
            <option value='보광동3가'>보광동3가</option>
            <option value='복만동'>복만동</option>
            <option value='북교동'>북교동</option>
            <option value='산정동'>산정동</option>
            <option value='상동'>상동</option>
            <option value='상락동1가'>상락동1가</option>
            <option value='상락동2가'>상락동2가</option>
            <option value='서산동'>서산동</option>
            <option value='석현동'>석현동</option>
            <option value='수강동1가'>수강동1가</option>
            <option value='수강동2가'>수강동2가</option>
            <option value='양동'>양동</option>
            <option value='연산동'>연산동</option>
            <option value='영해동1가'>영해동1가</option>
            <option value='영해동2가'>영해동2가</option>
            <option value='옥암동'>옥암동</option>
            <option value='온금동'>온금동</option>
            <option value='용당동'>용당동</option>
            <option value='용해동'>용해동</option>
            <option value='유달동'>유달동</option>
            <option value='유동'>유동</option>
            <option value='율도동'>율도동</option>
            <option value='죽교동'>죽교동</option>
            <option value='죽동'>죽동</option>
            <option value='중동1가'>중동1가</option>
            <option value='중동2가'>중동2가</option>
            <option value='중앙동1가'>중앙동1가</option>
            <option value='중앙동2가'>중앙동2가</option>
            <option value='중앙동3가'>중앙동3가</option>
            <option value='창평동'>창평동</option>
            <option value='축복동1가'>축복동1가</option>
            <option value='축복동2가'>축복동2가</option>
            <option value='축복동3가'>축복동3가</option>
            <option value='측후동'>측후동</option>
            <option value='항동'>항동</option>
            <option value='해안동1가'>해안동1가</option>
            <option value='해안동2가'>해안동2가</option>
            <option value='해안동3가'>해안동3가</option>
            <option value='해안동4가'>해안동4가</option>
            <option value='행복동1가'>행복동1가</option>
            <option value='행복동2가'>행복동2가</option>
            <option value='호남동'>호남동</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '무안군') {
        addressselect.innerHTML = `
            <option value='망운면'>망운면</option>
            <option value='몽탄면'>몽탄면</option>
            <option value='무안읍'>무안읍</option>
            <option value='삼향읍'>삼향읍</option>
            <option value='운남면'>운남면</option>
            <option value='일로읍'>일로읍</option>
            <option value='청계면'>청계면</option>
            <option value='해제면'>해제면</option>
            <option value='현경면'>현경면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '보성군') {
        addressselect.innerHTML = `
            <option value='겸백면'>겸백면</option>
            <option value='노동면'>노동면</option>
            <option value='득량면'>득량면</option>
            <option value='문덕면'>문덕면</option>
            <option value='미력면'>미력면</option>
            <option value='벌교읍'>벌교읍</option>
            <option value='보성읍'>보성읍</option>
            <option value='복내면'>복내면</option>
            <option value='웅치면'>웅치면</option>
            <option value='율어면'>율어면</option>
            <option value='조성면'>조성면</option>
            <option value='회천면'>회천면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '순천시') {
        addressselect.innerHTML = `
            <option value='가곡동'>가곡동</option>
            <option value='교량동'>교량동</option>
            <option value='금곡동'>금곡동</option>
            <option value='낙안면'>낙안면</option>
            <option value='남내동'>남내동</option>
            <option value='남정동'>남정동</option>
            <option value='대대동'>대대동</option>
            <option value='대룡동'>대룡동</option>
            <option value='덕암동'>덕암동</option>
            <option value='덕월동'>덕월동</option>
            <option value='동외동'>동외동</option>
            <option value='매곡동'>매곡동</option>
            <option value='별량면'>별량면</option>
            <option value='삼거동'>삼거동</option>
            <option value='상사면'>상사면</option>
            <option value='생목동'>생목동</option>
            <option value='서면'>서면</option>
            <option value='송광면'>송광면</option>
            <option value='승주읍'>승주읍</option>
            <option value='안풍동'>안풍동</option>
            <option value='야흥동'>야흥동</option>
            <option value='연향동'>연향동</option>
            <option value='영동'>영동</option>
            <option value='옥천동'>옥천동</option>
            <option value='와룡동'>와룡동</option>
            <option value='왕지동'>왕지동</option>
            <option value='외서면'>외서면</option>
            <option value='월등면'>월등면</option>
            <option value='인월동'>인월동</option>
            <option value='인제동'>인제동</option>
            <option value='장천동'>장천동</option>
            <option value='저전동'>저전동</option>
            <option value='조곡동'>조곡동</option>
            <option value='조례동'>조례동</option>
            <option value='주암면'>주암면</option>
            <option value='풍덕동'>풍덕동</option>
            <option value='해룡면'>해룡면</option>
            <option value='행동'>행동</option>
            <option value='홍내동'>홍내동</option>
            <option value='황전면'>황전면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '신안군') {
        addressselect.innerHTML = `
            <option value='도초면'>도초면</option>
            <option value='비금면'>비금면</option>
            <option value='신의면'>신의면</option>
            <option value='안좌면'>안좌면</option>
            <option value='암태면'>암태면</option>
            <option value='압해읍'>압해읍</option>
            <option value='임자면'>임자면</option>
            <option value='자은면'>자은면</option>
            <option value='장산면'>장산면</option>
            <option value='증도면'>증도면</option>
            <option value='지도읍'>지도읍</option>
            <option value='팔금면'>팔금면</option>
            <option value='하의면'>하의면</option>
            <option value='흑산면'>흑산면</option>
        `;
    }else if (citySelect.value=== '전라남도' && districtSelect.value === '여수시') {
        addressselect.innerHTML = `
            <option value='경호동'>경호동</option>
            <option value='고소동'>고소동</option>
            <option value='공화동'>공화동</option>
            <option value='관문동'>관문동</option>
            <option value='광무동'>광무동</option>
            <option value='교동'>교동</option>
            <option value='국동'>국동</option>
            <option value='군자동'>군자동</option>
            <option value='낙포동'>낙포동</option>
            <option value='남면'>남면</option>
            <option value='남산동'>남산동</option>
            <option value='덕충동'>덕충동</option>
            <option value='돌산읍'>돌산읍</option>
            <option value='동산동'>동산동</option>
            <option value='둔덕동'>둔덕동</option>
            <option value='만흥동'>만흥동</option>
            <option value='묘도동'>묘도동</option>
            <option value='문수동'>문수동</option>
            <option value='미평동'>미평동</option>
            <option value='봉강동'>봉강동</option>
            <option value='봉계동'>봉계동</option>
            <option value='봉산동'>봉산동</option>
            <option value='삼산면'>삼산면</option>
            <option value='상암동'>상암동</option>
            <option value='서교동'>서교동</option>
            <option value='선원동'>선원동</option>
            <option value='소라면'>소라면</option>
            <option value='소호동'>소호동</option>
            <option value='수정동'>수정동</option>
            <option value='시전동'>시전동</option>
            <option value='신기동'>신기동</option>
            <option value='신덕동'>신덕동</option>
            <option value='신월동'>신월동</option>
            <option value='안산동'>안산동</option>
            <option value='여서동'>여서동</option>
            <option value='여천동'>여천동</option>
            <option value='연등동'>연등동</option>
            <option value='오림동'>오림동</option>
            <option value='오천동'>오천동</option>
            <option value='웅천동'>웅천동</option>
            <option value='월내동'>월내동</option>
            <option value='월하동'>월하동</option>
            <option value='율촌면'>율촌면</option>
            <option value='적량동'>적량동</option>
            <option value='종화동'>종화동</option>
            <option value='주삼동'>주삼동</option>
            <option value='중앙동'>중앙동</option>
            <option value='중흥동'>중흥동</option>
            <option value='충무동'>충무동</option>
            <option value='평여동'>평여동</option>
            <option value='학동'>학동</option>
            <option value='학용동'>학용동</option>
            <option value='해산동'>해산동</option>
            <option value='호명동'>호명동</option>
            <option value='화양면'>화양면</option>
            <option value='화장동'>화장동</option>
            <option value='화정면'>화정면</option>
            <option value='화치동'>화치동</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '영광군') {
        addressselect.innerHTML = `
            <option value='군남면'>군남면</option>
            <option value='낙월면'>낙월면</option>
            <option value='대마면'>대마면</option>
            <option value='묘량면'>묘량면</option>
            <option value='백수읍'>백수읍</option>
            <option value='법성면'>법성면</option>
            <option value='불갑면'>불갑면</option>
            <option value='염산면'>염산면</option>
            <option value='영광읍'>영광읍</option>
            <option value='홍농읍'>홍농읍</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '영암군') {
        addressselect.innerHTML = `
            <option value='군서면'>군서면</option>
            <option value='금정면'>금정면</option>
            <option value='덕진면'>덕진면</option>
            <option value='도포면'>도포면</option>
            <option value='미암면'>미암면</option>
            <option value='삼호읍'>삼호읍</option>
            <option value='서호면'>서호면</option>
            <option value='시종면'>시종면</option>
            <option value='신북면'>신북면</option>
            <option value='영암읍'>영암읍</option>
            <option value='학산면'>학산면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '완도군') {
        addressselect.innerHTML = `
            <option value='고금면'>고금면</option>
            <option value='군외면'>군외면</option>
            <option value='금당면'>금당면</option>
            <option value='금일읍'>금일읍</option>
            <option value='노화읍'>노화읍</option>
            <option value='보길면'>보길면</option>
            <option value='생일면'>생일면</option>
            <option value='소안면'>소안면</option>
            <option value='신지면'>신지면</option>
            <option value='약산면'>약산면</option>
            <option value='완도읍'>완도읍</option>
            <option value='청산면'>청산면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '장성군') {
        addressselect.innerHTML = `
            <option value='동화면'>동화면</option>
            <option value='북이면'>북이면</option>
            <option value='북하면'>북하면</option>
            <option value='삼계면'>삼계면</option>
            <option value='삼서면'>삼서면</option>
            <option value='서삼면'>서삼면</option>
            <option value='장성읍'>장성읍</option>
            <option value='진원면'>진원면</option>
            <option value='황룡면'>황룡면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '장흥군') {
        addressselect.innerHTML = `
            <option value='관산읍'>관산읍</option>
            <option value='대덕읍'>대덕읍</option>
            <option value='부산면'>부산면</option>
            <option value='안양면'>안양면</option>
            <option value='용산면'>용산면</option>
            <option value='유치면'>유치면</option>
            <option value='장동면'>장동면</option>
            <option value='장평면'>장평면</option>
            <option value='장흥읍'>장흥읍</option>
            <option value='회진면'>회진면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '진도군') {
        addressselect.innerHTML = `
            <option value='고군면'>고군면</option>
            <option value='군내면'>군내면</option>
            <option value='의신면'>의신면</option>
            <option value='임회면'>임회면</option>
            <option value='조도면'>조도면</option>
            <option value='지산면'>지산면</option>
            <option value='진도읍'>진도읍</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '함평군') {
        addressselect.innerHTML = `
            <option value='나산면'>나산면</option>
            <option value='대동면'>대동면</option>
            <option value='손불면'>손불면</option>
            <option value='신광면'>신광면</option>
            <option value='엄다면'>엄다면</option>
            <option value='월야면'>월야면</option>
            <option value='학교면'>학교면</option>
            <option value='함평읍'>함평읍</option>
            <option value='해보면'>해보면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '해남군') {
        addressselect.innerHTML = `
            <option value='계곡면'>계곡면</option>
            <option value='문내면'>문내면</option>
            <option value='북일면'>북일면</option>
            <option value='북평면'>북평면</option>
            <option value='산이면'>산이면</option>
            <option value='송지면'>송지면</option>
            <option value='옥천면'>옥천면</option>
            <option value='해남읍'>해남읍</option>
            <option value='현산면'>현산면</option>
            <option value='화산면'>화산면</option>
            <option value='화원면'>화원면</option>
            <option value='황산면'>황산면</option>
        `;
    }
    else if (citySelect.value=== '전라남도' && districtSelect.value === '화순군') {
        addressselect.innerHTML = `
            <option value='능주면'>능주면</option>
            <option value='도곡면'>도곡면</option>
            <option value='도암면'>도암면</option>
            <option value='동면'>동면</option>
            <option value='동복면'>동복면</option>
            <option value='백아면'>백아면</option>
            <option value='사평면'>사평면</option>
            <option value='이서면'>이서면</option>
            <option value='이양면'>이양면</option>
            <option value='청풍면'>청풍면</option>
            <option value='춘양면'>춘양면</option>
            <option value='한천면'>한천면</option>
            <option value='화순읍'>화순읍</option>
        `;
    }else if (citySelect.value=== '경상북도' && districtSelect.value === '경산시') {
        addressselect.innerHTML = `
            <option value='갑제동'>갑제동</option>
            <option value='계양동'>계양동</option>
            <option value='남방동'>남방동</option>
            <option value='남산면'>남산면</option>
            <option value='남천면'>남천면</option>
            <option value='내동'>내동</option>
            <option value='대동'>대동</option>
            <option value='대정동'>대정동</option>
            <option value='대평동'>대평동</option>
            <option value='백천동'>백천동</option>
            <option value='사동'>사동</option>
            <option value='사정동'>사정동</option>
            <option value='삼남동'>삼남동</option>
            <option value='삼북동'>삼북동</option>
            <option value='삼풍동'>삼풍동</option>
            <option value='상방동'>상방동</option>
            <option value='서상동'>서상동</option>
            <option value='신교동'>신교동</option>
            <option value='신천동'>신천동</option>
            <option value='압량읍'>압량읍</option>
            <option value='여천동'>여천동</option>
            <option value='옥곡동'>옥곡동</option>
            <option value='옥산동'>옥산동</option>
            <option value='와촌면'>와촌면</option>
            <option value='용성면'>용성면</option>
            <option value='유곡동'>유곡동</option>
            <option value='임당동'>임당동</option>
            <option value='자인면'>자인면</option>
            <option value='점촌동'>점촌동</option>
            <option value='정평동'>정평동</option>
            <option value='조영동'>조영동</option>
            <option value='중방동'>중방동</option>
            <option value='중산동'>중산동</option>
            <option value='진량읍'>진량읍</option>
            <option value='평산동'>평산동</option>
            <option value='하양읍'>하양읍</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '경주시') {
        addressselect.innerHTML = `
            <option value='감포읍'>감포읍</option>
            <option value='강동면'>강동면</option>
            <option value='건천읍'>건천읍</option>
            <option value='광명동'>광명동</option>
            <option value='교동'>교동</option>
            <option value='구정동'>구정동</option>
            <option value='구황동'>구황동</option>
            <option value='남산동'>남산동</option>
            <option value='내남면'>내남면</option>
            <option value='노동동'>노동동</option>
            <option value='노서동'>노서동</option>
            <option value='덕동'>덕동</option>
            <option value='도지동'>도지동</option>
            <option value='동방동'>동방동</option>
            <option value='동부동'>동부동</option>
            <option value='동천동'>동천동</option>
            <option value='마동'>마동</option>
            <option value='문무대왕면'>문무대왕면</option>
            <option value='배동'>배동</option>
            <option value='배반동'>배반동</option>
            <option value='보문동'>보문동</option>
            <option value='북군동'>북군동</option>
            <option value='북부동'>북부동</option>
            <option value='산내면'>산내면</option>
            <option value='서면'>서면</option>
            <option value='서부동'>서부동</option>
            <option value='서악동'>서악동</option>
            <option value='석장동'>석장동</option>
            <option value='성건동'>성건동</option>
            <option value='성동동'>성동동</option>
            <option value='손곡동'>손곡동</option>
            <option value='시동'>시동</option>
            <option value='시래동'>시래동</option>
            <option value='신평동'>신평동</option>
            <option value='안강읍'>안강읍</option>
            <option value='암곡동'>암곡동</option>
            <option value='양남면'>양남면</option>
            <option value='외동읍'>외동읍</option>
            <option value='용강동'>용강동</option>
            <option value='율동'>율동</option>
            <option value='인왕동'>인왕동</option>
            <option value='조양동'>조양동</option>
            <option value='진현동'>진현동</option>
            <option value='천군동'>천군동</option>
            <option value='천북면'>천북면</option>
            <option value='충효동'>충효동</option>
            <option value='탑동'>탑동</option>
            <option value='평동'>평동</option>
            <option value='하동'>하동</option>
            <option value='현곡면'>현곡면</option>
            <option value='황남동'>황남동</option>
            <option value='황성동'>황성동</option>
            <option value='황오동'>황오동</option>
            <option value='황용동'>황용동</option>
            <option value='효현동'>효현동</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '고령군') {
        addressselect.innerHTML = `
            <option value='개진면'>개진면</option>
            <option value='다산면'>다산면</option>
            <option value='대가야읍'>대가야읍</option>
            <option value='덕곡면'>덕곡면</option>
            <option value='성산면'>성산면</option>
            <option value='쌍림면'>쌍림면</option>
            <option value='우곡면'>우곡면</option>
            <option value='운수면'>운수면</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '구미시') {
        addressselect.innerHTML = `
            <option value='거의동'>거의동</option>
            <option value='고아읍'>고아읍</option>
            <option value='공단동'>공단동</option>
            <option value='광평동'>광평동</option>
            <option value='구평동'>구평동</option>
            <option value='구포동'>구포동</option>
            <option value='금전동'>금전동</option>
            <option value='남통동'>남통동</option>
            <option value='도개면'>도개면</option>
            <option value='도량동'>도량동</option>
            <option value='무을면'>무을면</option>
            <option value='봉곡동'>봉곡동</option>
            <option value='부곡동'>부곡동</option>
            <option value='비산동'>비산동</option>
            <option value='사곡동'>사곡동</option>
            <option value='산동읍'>산동읍</option>
            <option value='상모동'>상모동</option>
            <option value='선기동'>선기동</option>
            <option value='선산읍'>선산읍</option>
            <option value='송정동'>송정동</option>
            <option value='수점동'>수점동</option>
            <option value='시미동'>시미동</option>
            <option value='신동'>신동</option>
            <option value='양호동'>양호동</option>
            <option value='오태동'>오태동</option>
            <option value='옥계동'>옥계동</option>
            <option value='옥성면'>옥성면</option>
            <option value='원평동'>원평동</option>
            <option value='인의동'>인의동</option>
            <option value='임수동'>임수동</option>
            <option value='임은동'>임은동</option>
            <option value='장천면'>장천면</option>
            <option value='지산동'>지산동</option>
            <option value='진평동'>진평동</option>
            <option value='해평면'>해평면</option>
            <option value='형곡동'>형곡동</option>
            <option value='황상동'>황상동</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '군위군') {
        addressselect.innerHTML = `
            <option value='군위읍'>군위읍</option>
            <option value='부계면'>부계면</option>
            <option value='산성면'>산성면</option>
            <option value='삼국유사면'>삼국유사면</option>
            <option value='소보면'>소보면</option>
            <option value='우보면'>우보면</option>
            <option value='의흥면'>의흥면</option>
            <option value='효령면'>효령면</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '김천시') {
        addressselect.innerHTML = `
            <option value='감문면'>감문면</option>
            <option value='감천면'>감천면</option>
            <option value='감호동'>감호동</option>
            <option value='개령면'>개령면</option>
            <option value='구성면'>구성면</option>
            <option value='남면'>남면</option>
            <option value='농소면'>농소면</option>
            <option value='다수동'>다수동</option>
            <option value='대광동'>대광동</option>
            <option value='대덕면'>대덕면</option>
            <option value='대항면'>대항면</option>
            <option value='덕곡동'>덕곡동</option>
            <option value='모암동'>모암동</option>
            <option value='문당동'>문당동</option>
            <option value='백옥동'>백옥동</option>
            <option value='봉산면'>봉산면</option>
            <option value='부항면'>부항면</option>
            <option value='삼락동'>삼락동</option>
            <option value='성내동'>성내동</option>
            <option value='신음동'>신음동</option>
            <option value='아포읍'>아포읍</option>
            <option value='양천동'>양천동</option>
            <option value='어모면'>어모면</option>
            <option value='용두동'>용두동</option>
            <option value='율곡동'>율곡동</option>
            <option value='응명동'>응명동</option>
            <option value='조마면'>조마면</option>
            <option value='증산면'>증산면</option>
            <option value='지례면'>지례면</option>
            <option value='지좌동'>지좌동</option>
            <option value='평화동'>평화동</option>
            <option value='황금동'>황금동</option>
        `;
    }else if (citySelect.value=== '경상북도' && districtSelect.value === '문경시') {
        addressselect.innerHTML = `
            <option value='가은읍'>가은읍</option>
            <option value='공평동'>공평동</option>
            <option value='농암면'>농암면</option>
            <option value='동로면'>동로면</option>
            <option value='마성면'>마성면</option>
            <option value='모전동'>모전동</option>
            <option value='문경읍'>문경읍</option>
            <option value='불정동'>불정동</option>
            <option value='산북면'>산북면</option>
            <option value='산양면'>산양면</option>
            <option value='신기동'>신기동</option>
            <option value='영순면'>영순면</option>
            <option value='영신동'>영신동</option>
            <option value='우지동'>우지동</option>
            <option value='윤직동'>윤직동</option>
            <option value='창동'>창동</option>
            <option value='호계면'>호계면</option>
            <option value='흥덕동'>흥덕동</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '봉화군') {
        addressselect.innerHTML = `
            <option value='명호면'>명호면</option>
            <option value='물야면'>물야면</option>
            <option value='법전면'>법전면</option>
            <option value='봉성면'>봉성면</option>
            <option value='봉화읍'>봉화읍</option>
            <option value='상운면'>상운면</option>
            <option value='석포면'>석포면</option>
            <option value='소천면'>소천면</option>
            <option value='재산면'>재산면</option>
            <option value='춘양면'>춘양면</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '상주시') {
        addressselect.innerHTML = `
            <option value='가장동'>가장동</option>
            <option value='개운동'>개운동</option>
            <option value='거동동'>거동동</option>
            <option value='계산동'>계산동</option>
            <option value='공검면'>공검면</option>
            <option value='공성면'>공성면</option>
            <option value='낙동면'>낙동면</option>
            <option value='낙상동'>낙상동</option>
            <option value='낙양동'>낙양동</option>
            <option value='남성동'>남성동</option>
            <option value='남장동'>남장동</option>
            <option value='남적동'>남적동</option>
            <option value='내서면'>내서면</option>
            <option value='냉림동'>냉림동</option>
            <option value='도남동'>도남동</option>
            <option value='만산동'>만산동</option>
            <option value='모동면'>모동면</option>
            <option value='모서면'>모서면</option>
            <option value='무양동'>무양동</option>
            <option value='병성동'>병성동</option>
            <option value='복룡동'>복룡동</option>
            <option value='부원동'>부원동</option>
            <option value='사벌국면'>사벌국면</option>
            <option value='서곡동'>서곡동</option>
            <option value='서문동'>서문동</option>
            <option value='서성동'>서성동</option>
            <option value='성하동'>성하동</option>
            <option value='신봉동'>신봉동</option>
            <option value='양촌동'>양촌동</option>
            <option value='연원동'>연원동</option>
            <option value='오대동'>오대동</option>
            <option value='외남면'>외남면</option>
            <option value='외답동'>외답동</option>
            <option value='외서면'>외서면</option>
            <option value='은척면'>은척면</option>
            <option value='이안면'>이안면</option>
            <option value='인봉동'>인봉동</option>
            <option value='인평동'>인평동</option>
            <option value='죽전동'>죽전동</option>
            <option value='중덕동'>중덕동</option>
            <option value='중동면'>중동면</option>
            <option value='지천동'>지천동</option>
            <option value='청리면'>청리면</option>
            <option value='초산동'>초산동</option>
            <option value='함창읍'>함창읍</option>
            <option value='헌신동'>헌신동</option>
            <option value='화개동'>화개동</option>
            <option value='화남면'>화남면</option>
            <option value='화동면'>화동면</option>
            <option value='화북면'>화북면</option>
            <option value='화산동'>화산동</option>
            <option value='화서면'>화서면</option>
            <option value='흥각동'>흥각동</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '성주군') {
        addressselect.innerHTML = `
            <option value='가천면'>가천면</option>
            <option value='금수면'>금수면</option>
            <option value='대가면'>대가면</option>
            <option value='벽진면'>벽진면</option>
            <option value='선남면'>선남면</option>
            <option value='성주읍'>성주읍</option>
            <option value='수륜면'>수륜면</option>
            <option value='용암면'>용암면</option>
            <option value='월항면'>월항면</option>
            <option value='초전면'>초전면</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '안동시') {
        addressselect.innerHTML = `
            <option value='광석동'>광석동</option>
            <option value='금곡동'>금곡동</option>
            <option value='길안면'>길안면</option>
            <option value='남문동'>남문동</option>
            <option value='남부동'>남부동</option>
            <option value='남선면'>남선면</option>
            <option value='남후면'>남후면</option>
            <option value='노하동'>노하동</option>
            <option value='놹전면'>놹전면</option>
            <option value='당북동'>당북동</option>
            <option value='대석동'>대석동</option>
            <option value='도산면'>도산면</option>
            <option value='동문동'>동문동</option>
            <option value='명륜동'>명륜동</option>
            <option value='목성동'>목성동</option>
            <option value='법상동'>법상동</option>
            <option value='법흥동'>법흥동</option>
            <option value='북문동'>북문동</option>
            <option value='북후면'>북후면</option>
            <option value='삼산동'>삼산동</option>
            <option value='상아동'>상아동</option>
            <option value='서후면'>서후면</option>
            <option value='석동동'>석동동</option>
            <option value='성곡동'>성곡동</option>
            <option value='송천동'>송천동</option>
            <option value='송현동'>송현동</option>
            <option value='수상동'>수상동</option>
            <option value='수하동'>수하동</option>
            <option value='신세동'>신세동</option>
            <option value='신안동'>신안동</option>
            <option value='안기동'>안기동</option>
            <option value='안막동'>안막동</option>
            <option value='안흥동'>안흥동</option>
            <option value='예안면'>예안면</option>
            <option value='옥동'>옥동</option>
            <option value='옥야동'>옥야동</option>
            <option value='옥정동'>옥정동</option>
            <option value='와룡면'>와룡면</option>
            <option value='용상동'>용상동</option>
            <option value='운안동'>운안동</option>
            <option value='운흥동'>운흥동</option>
            <option value='율세동'>율세동</option>
            <option value='이천동'>이천동</option>
            <option value='일직면'>일직면</option>
            <option value='임동면'>임동면</option>
            <option value='임하면'>임하면</option>
            <option value='정상동'>정상동</option>
            <option value='정하동'>정하동</option>
            <option value='천리동'>천리동</option>
            <option value='태화동'>태화동</option>
            <option value='풍산읍'>풍산읍</option>
            <option value='풍천면'>풍천면</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '영덕군') {
        addressselect.innerHTML = `
            <option value='강구면'>강구면</option>
            <option value='남정면'>남정면</option>
            <option value='달산면'>달산면</option>
            <option value='병곡면'>병곡면</option>
            <option value='영덕읍'>영덕읍</option>
            <option value='영해면'>영해면</option>
            <option value='지품면'>지품면</option>
            <option value='창수면'>창수면</option>
            <option value='축산면'>축산면</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '영양군') {
        addressselect.innerHTML = `
            <option value='석보면'>석보면</option>
            <option value='수비면'>수비면</option>
            <option value='영양읍'>영양읍</option>
            <option value='일월면'>일월면</option>
            <option value='입암면'>입암면</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '영주시') {
        addressselect.innerHTML = `
            <option value='가흥동'>가흥동</option>
            <option value='고현동'>고현동</option>
            <option value='단산면'>단산면</option>
            <option value='문수면'>문수면</option>
            <option value='문정동'>문정동</option>
            <option value='봉현면'>봉현면</option>
            <option value='부석면'>부석면</option>
            <option value='상망동'>상망동</option>
            <option value='상줄동'>상줄동</option>
            <option value='순흥면'>순흥면</option>
            <option value='아지동'>아지동</option>
            <option value='안정면'>안정면</option>
            <option value='영주동'>영주동</option>
            <option value='이산면'>이산면</option>
            <option value='장수면'>장수면</option>
            <option value='적서동'>적서동</option>
            <option value='조암동'>조암동</option>
            <option value='조와동'>조와동</option>
            <option value='창진동'>창진동</option>
            <option value='평은면'>평은면</option>
            <option value='휴천동'>휴천동</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '영천시') {
        addressselect.innerHTML = `
            <option value='고경면'>고경면</option>
            <option value='과전동'>과전동</option>
            <option value='괴연동'>괴연동</option>
            <option value='교촌동'>교촌동</option>
            <option value='금노동'>금노동</option>
            <option value='금호읍'>금호읍</option>
            <option value='녹전동'>녹전동</option>
            <option value='대전동'>대전동</option>
            <option value='대창면'>대창면</option>
            <option value='도동'>도동</option>
            <option value='도림동'>도림동</option>
            <option value='망정동'>망정동</option>
            <option value='매산동'>매산동</option>
            <option value='문내동'>문내동</option>
            <option value='문외동'>문외동</option>
            <option value='범어동'>범어동</option>
            <option value='본촌동'>본촌동</option>
            <option value='봉동'>봉동</option>
            <option value='북안면'>북안면</option>
            <option value='서산동'>서산동</option>
            <option value='신녕면'>신녕면</option>
            <option value='쌍계동'>쌍계동</option>
            <option value='야사동'>야사동</option>
            <option value='언하동'>언하동</option>
            <option value='오미동'>오미동</option>
            <option value='오수동'>오수동</option>
            <option value='완산동'>완산동</option>
            <option value='임고면'>임고면</option>
            <option value='자양면'>자양면</option>
            <option value='작산동'>작산동</option>
            <option value='조교동'>조교동</option>
            <option value='창구동'>창구동</option>
            <option value='채신동'>채신동</option>
            <option value='청통면'>청통면</option>
            <option value='화룡동'>화룡동</option>
            <option value='화산면'>화산면</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '예천군') {
        addressselect.innerHTML = `
            <option value='개포면'>개포면</option>
            <option value='보문면'>보문면</option>
            <option value='예천읍'>예천읍</option>
            <option value='용궁면'>용궁면</option>
            <option value='용문면'>용문면</option>
            <option value='유천면'>유천면</option>
            <option value='은풍면'>은풍면</option>
            <option value='지보면'>지보면</option>
            <option value='풍양면'>풍양면</option>
            <option value='호명면'>호명면</option>
            <option value='효자면'>효자면</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '울릉군') {
        addressselect.innerHTML = `
            <option value='북면'>북면</option>
            <option value='울릉읍'>울릉읍</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '울진군') {
        addressselect.innerHTML = `
            <option value='근남면'>근남면</option>
            <option value='금강송면'>금강송면</option>
            <option value='기성면'>기성면</option>
            <option value='매화면'>매화면</option>
            <option value='온정면'>온정면</option>
            <option value='울진읍'>울진읍</option>
            <option value='죽변면'>죽변면</option>
            <option value='평해읍'>평해읍</option>
            <option value='후포면'>후포면</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '의성군') {
        addressselect.innerHTML = `
            <option value='가음면'>가음면</option>
            <option value='구천면'>구천면</option>
            <option value='금성면'>금성면</option>
            <option value='다인면'>다인면</option>
            <option value='단밀면'>단밀면</option>
            <option value='단북면'>단북면</option>
            <option value='단촌면'>단촌면</option>
            <option value='봉양면'>봉양면</option>
            <option value='비안면'>비안면</option>
            <option value='사곡면'>사곡면</option>
            <option value='신평면'>신평면</option>
            <option value='안계면'>안계면</option>
            <option value='안사면'>안사면</option>
            <option value='안평면'>안평면</option>
            <option value='옥산면'>옥산면</option>
            <option value='의성읍'>의성읍</option>
            <option value='점곡면'>점곡면</option>
            <option value='춘산면'>춘산면</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '청도군') {
        addressselect.innerHTML = `
            <option value='각남면'>각남면</option>
            <option value='각북면'>각북면</option>
            <option value='금천면'>금천면</option>
            <option value='매전면'>매전면</option>
            <option value='운문면'>운문면</option>
            <option value='이서면'>이서면</option>
            <option value='청도읍'>청도읍</option>
            <option value='풍각면'>풍각면</option>
            <option value='화양읍'>화양읍</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '청송군') {
        addressselect.innerHTML = `
            <option value='부남면'>부남면</option>
            <option value='안덕면'>안덕면</option>
            <option value='주왕산면'>주왕산면</option>
            <option value='진보면'>진보면</option>
            <option value='청송읍'>청송읍</option>
            <option value='파천면'>파천면</option>
            <option value='현동면'>현동면</option>
            <option value='현서면'>현서면</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '칠곡군') {
        addressselect.innerHTML = `
            <option value='가산면'>가산면</option>
            <option value='기산면'>기산면</option>
            <option value='동명면'>동명면</option>
            <option value='북삼읍'>북삼읍</option>
            <option value='석적읍'>석적읍</option>
            <option value='약목면'>약목면</option>
            <option value='왜관읍'>왜관읍</option>
            <option value='지천면'>지천면</option>
        `;
    }else if (citySelect.value=== '경상북도' && districtSelect.value === '포항시 남구') {
        addressselect.innerHTML = `
            <option value='상도동'>상도동</option>
            <option value='대도동'>대도동</option>
            <option value='해도동'>해도동</option>
            <option value='송도동'>송도동</option>
            <option value='청림동'>청림동</option>
            <option value='일월동'>일월동</option>
            <option value='송정동'>송정동</option>
            <option value='송내동'>송내동</option>
            <option value='괴동동'>괴동동</option>
            <option value='동촌동'>동촌동</option>
            <option value='장흥동'>장흥동</option>
            <option value='인덕동'>인덕동</option>
            <option value='호동'>호동</option>
            <option value='효자동'>효자동</option>
            <option value='지곡동'>지곡동</option>
            <option value='대잠동'>대잠동</option>
            <option value='이동'>이동</option>
            <option value='구룡포읍'>구룡포읍</option>
            <option value='연일읍'>연일읍</option>
            <option value='오천읍'>오천읍</option>
        `;
    }
    else if (citySelect.value=== '경상북도' && districtSelect.value === '포항시 북구') {
        addressselect.innerHTML = `
            <option value='대흥동'>대흥동</option>
            <option value='신흥동'>신흥동</option>
            <option value='남빈동'>남빈동</option>
            <option value='상원동'>상원동</option>
            <option value='여천동'>여천동</option>
            <option value='중앙동'>중앙동</option>
            <option value='덕산동'>덕산동</option>
            <option value='덕수동'>덕수동</option>
            <option value='대신동'>대신동</option>
            <option value='동빈1가'>동빈1가</option>
            <option value='동빈2가'>동빈2가</option>
            <option value='학산동'>학산동</option>
            <option value='항구동'>항구동</option>
            <option value='득량동'>득량동</option>
            <option value='학잠동'>학잠동</option>
            <option value='죽도동'>죽도동</option>
            <option value='용흥동'>용흥동</option>
            <option value='우현동'>우현동</option>
            <option value='창포동'>창포동</option>
            <option value='두호동'>두호동</option>
            <option value='장성동'>장성동</option>
            <option value='양덕동'>양덕동</option>
            <option value='환호동'>환호동</option>
            <option value='여남동'>여남동</option>
            <option value='흥해읍'>흥해읍</option>
            <option value='신광면'>신광면</option>
            <option value='청하면'>청하면</option>
            <option value='송라면'>송라면</option>
            <option value='기계면'>기계면</option>
            <option value='죽장면'>죽장면</option>
            <option value='기북면'>기북면</option>
        `;
    }else if (citySelect.value=== '경상남도' && districtSelect.value === '창원시 마산합포구') {
        addressselect.innerHTML = `
            <option value='가포동'>가포동</option>
            <option value='교방동'>교방동</option>
            <option value='교원동'>교원동</option>
            <option value='구산면'>구산면</option>
            <option value='남성동'>남성동</option>
            <option value='대내동'>대내동</option>
            <option value='대성동1가'>대성동1가</option>
            <option value='대성동2가'>대성동2가</option>
            <option value='대외동'>대외동</option>
            <option value='대창동'>대창동</option>
            <option value='덕동동'>덕동동</option>
            <option value='동성동'>동성동</option>
            <option value='두월동1가'>두월동1가</option>
            <option value='두월동2가'>두월동2가</option>
            <option value='두월동3가'>두월동3가</option>
            <option value='문화동'>문화동</option>
            <option value='반월동'>반월동</option>
            <option value='부림동'>부림동</option>
            <option value='산호동'>산호동</option>
            <option value='상남동'>상남동</option>
            <option value='서성동'>서성동</option>
            <option value='성호동'>성호동</option>
            <option value='수성동'>수성동</option>
            <option value='신월동'>신월동</option>
            <option value='신창동'>신창동</option>
            <option value='신포동1가'>신포동1가</option>
            <option value='신포동2가'>신포동2가</option>
            <option value='신흥동'>신흥동</option>
            <option value='예곡동'>예곡동</option>
            <option value='오동동'>오동동</option>
            <option value='완월동'>완월동</option>
            <option value='우산동'>우산동</option>
            <option value='월남동1가'>월남동1가</option>
            <option value='월남동2가'>월남동2가</option>
            <option value='월남동3가'>월남동3가</option>
            <option value='월남동4가'>월남동4가</option>
            <option value='월남동5가'>월남동5가</option>
            <option value='월영동'>월영동</option>
            <option value='월포동'>월포동</option>
            <option value='유록동'>유록동</option>
            <option value='자산동'>자산동</option>
            <option value='장군동1가'>장군동1가</option>
            <option value='장군동2가'>장군동2가</option>
            <option value='장군동3가'>장군동3가</option>
            <option value='장군동4가'>장군동4가</option>
            <option value='장군동5가'>장군동5가</option>
            <option value='중성동'>중성동</option>
            <option value='중앙동1가'>중앙동1가</option>
            <option value='중앙동2가'>중앙동2가</option>
            <option value='중앙동3가'>중앙동3가</option>
            <option value='진동면'>진동면</option>
            <option value='진북면'>진북면</option>
            <option value='진전면'>진전면</option>
            <option value='창동'>창동</option>
            <option value='창포동1가'>창포동1가</option>
            <option value='창포동2가'>창포동2가</option>
            <option value='창포동3가'>창포동3가</option>
            <option value='청계동'>청계동</option>
            <option value='추산동'>추산동</option>
            <option value='평화동'>평화동</option>
            <option value='해운동'>해운동</option>
            <option value='현동'>현동</option>
            <option value='홍문동'>홍문동</option>
            <option value='화영동'>화영동</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '창원시 마산회원구') {
        addressselect.innerHTML = `
            <option value='구암동'>구암동</option>
            <option value='내서읍'>내서읍</option>
            <option value='두척동'>두척동</option>
            <option value='봉암동'>봉암동</option>
            <option value='석전동'>석전동</option>
            <option value='양덕동'>양덕동</option>
            <option value='합성동'>합성동</option>
            <option value='회성동'>회성동</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '창원시 성산구') {
        addressselect.innerHTML = `
            <option value='가음동'>가음동</option>
            <option value='가음정동'>가음정동</option>
            <option value='귀곡동'>귀곡동</option>
            <option value='귀산동'>귀산동</option>
            <option value='귀현동'>귀현동</option>
            <option value='남산동'>남산동</option>
            <option value='남양동'>남양동</option>
            <option value='남지동'>남지동</option>
            <option value='내동'>내동</option>
            <option value='대방동'>대방동</option>
            <option value='대원동'>대원동</option>
            <option value='덕정동'>덕정동</option>
            <option value='두대동'>두대동</option>
            <option value='반림동'>반림동</option>
            <option value='반송동'>반송동</option>
            <option value='반지동'>반지동</option>
            <option value='불모산동'>불모산동</option>
            <option value='사파동'>사파동</option>
            <option value='사파정동'>사파정동</option>
            <option value='삼동동'>삼동동</option>
            <option value='삼정자동'>삼정자동</option>
            <option value='상복동'>상복동</option>
            <option value='성산동'>성산동</option>
            <option value='성주동'>성주동</option>
            <option value='신촌동'>신촌동</option>
            <option value='안민동'>안민동</option>
            <option value='양곡동'>양곡동</option>
            <option value='완암동'>완암동</option>
            <option value='외동'>외동</option>
            <option value='용지동'>용지동</option>
            <option value='용호동'>용호동</option>
            <option value='웅남동'>웅남동</option>
            <option value='월림동'>월림동</option>
            <option value='적현동'>적현동</option>
            <option value='중앙동'>중앙동</option>
            <option value='창곡동'>창곡동</option>
            <option value='천선동'>천선동</option>
            <option value='토월동'>토월동</option>
            <option value='퇴촌동'>퇴촌동</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '창원시 의창구') {
        addressselect.innerHTML = `
            <option value='내리동'>내리동</option>
            <option value='대산면'>대산면</option>
            <option value='도계동'>도계동</option>
            <option value='동읍'>동읍</option>
            <option value='동정동'>동정동</option>
            <option value='명곡동'>명곡동</option>
            <option value='명서동'>명서동</option>
            <option value='반계동'>반계동</option>
            <option value='봉곡동'>봉곡동</option>
            <option value='봉림동'>봉림동</option>
            <option value='북동'>북동</option>
            <option value='북면'>북면</option>
            <option value='사림동'>사림동</option>
            <option value='사화동'>사화동</option>
            <option value='서곡동'>서곡동</option>
            <option value='서상동'>서상동</option>
            <option value='소계동'>소계동</option>
            <option value='소답동'>소답동</option>
            <option value='용동'>용동</option>
            <option value='중동'>중동</option>
            <option value='지귀동'>지귀동</option>
            <option value='차용동'>차용동</option>
            <option value='팔용동'>팔용동</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '창원시 진해구') {
        addressselect.innerHTML = `
            <option value='가주동'>가주동</option>
            <option value='경화동'>경화동</option>
            <option value='광화동'>광화동</option>
            <option value='근화동'>근화동</option>
            <option value='남문동'>남문동</option>
            <option value='남빈동'>남빈동</option>
            <option value='대영동'>대영동</option>
            <option value='대장동'>대장동</option>
            <option value='대죽동'>대죽동</option>
            <option value='대천동'>대천동</option>
            <option value='대흥동'>대흥동</option>
            <option value='덕산동'>덕산동</option>
            <option value='도만동'>도만동</option>
            <option value='도천동'>도천동</option>
            <option value='동상동'>동상동</option>
            <option value='두동'>두동</option>
            <option value='마천동'>마천동</option>
            <option value='명동'>명동</option>
            <option value='무송동'>무송동</option>
            <option value='부흥동'>부흥동</option>
            <option value='북부동'>북부동</option>
            <option value='비봉동'>비봉동</option>
            <option value='서중동'>서중동</option>
            <option value='석동'>석동</option>
            <option value='성내동'>성내동</option>
            <option value='소사동'>소사동</option>
            <option value='속천동'>속천동</option>
            <option value='송죽동'>송죽동</option>
            <option value='송학동'>송학동</option>
            <option value='수도동'>수도동</option>
            <option value='수송동'>수송동</option>
            <option value='숭인동'>숭인동</option>
            <option value='안곡동'>안곡동</option>
            <option value='안골동'>안골동</option>
            <option value='앵곡동'>앵곡동</option>
            <option value='여좌동'>여좌동</option>
            <option value='연도동'>연도동</option>
            <option value='용원동'>용원동</option>
            <option value='원포동'>원포동</option>
            <option value='이동'>이동</option>
            <option value='익선동'>익선동</option>
            <option value='인사동'>인사동</option>
            <option value='인의동'>인의동</option>
            <option value='자은동'>자은동</option>
            <option value='장천동'>장천동</option>
            <option value='제덕동'>제덕동</option>
            <option value='제황산동'>제황산동</option>
            <option value='죽곡동'>죽곡동</option>
            <option value='중평동'>중평동</option>
            <option value='창선동'>창선동</option>
            <option value='청안동'>청안동</option>
            <option value='충무동'>충무동</option>
            <option value='충의동'>충의동</option>
            <option value='태백동'>태백동</option>
            <option value='태평동'>태평동</option>
            <option value='통신동'>통신동</option>
            <option value='평안동'>평안동</option>
            <option value='풍호동'>풍호동</option>
            <option value='행암동'>행암동</option>
            <option value='화천동'>화천동</option>
        `;
    }else if (citySelect.value=== '경상남도' && districtSelect.value === '거제시') {
        addressselect.innerHTML = `
            <option value='거제면'>거제면</option>
            <option value='고현동'>고현동</option>
            <option value='남부면'>남부면</option>
            <option value='능포동'>능포동</option>
            <option value='덕포동'>덕포동</option>
            <option value='동부면'>동부면</option>
            <option value='두모동'>두모동</option>
            <option value='둔덕면'>둔덕면</option>
            <option value='문동동'>문동동</option>
            <option value='사등면'>사등면</option>
            <option value='삼거동'>삼거동</option>
            <option value='상동동'>상동동</option>
            <option value='수월동'>수월동</option>
            <option value='아양동'>아양동</option>
            <option value='아주동'>아주동</option>
            <option value='양정동'>양정동</option>
            <option value='연초면'>연초면</option>
            <option value='옥포동'>옥포동</option>
            <option value='일운면'>일운면</option>
            <option value='장목면'>장목면</option>
            <option value='장승포동'>장승포동</option>
            <option value='장평동'>장평동</option>
            <option value='하청면'>하청면</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '거창군') {
        addressselect.innerHTML = `
            <option value='가북면'>가북면</option>
            <option value='가조면'>가조면</option>
            <option value='거창읍'>거창읍</option>
            <option value='고제면'>고제면</option>
            <option value='남상면'>남상면</option>
            <option value='남하면'>남하면</option>
            <option value='마리면'>마리면</option>
            <option value='북상면'>북상면</option>
            <option value='신원면'>신원면</option>
            <option value='웅양면'>웅양면</option>
            <option value='위천면'>위천면</option>
            <option value='주상면'>주상면</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '고성군') {
        addressselect.innerHTML = `
            <option value='개천면'>개천면</option>
            <option value='거류면'>거류면</option>
            <option value='고성읍'>고성읍</option>
            <option value='구만면'>구만면</option>
            <option value='대가면'>대가면</option>
            <option value='동해면'>동해면</option>
            <option value='마암면'>마암면</option>
            <option value='삼산면'>삼산면</option>
            <option value='상리면'>상리면</option>
            <option value='영오면'>영오면</option>
            <option value='영현면'>영현면</option>
            <option value='하이면'>하이면</option>
            <option value='하일면'>하일면</option>
            <option value='회화면'>회화면</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '김해시') {
        addressselect.innerHTML = `
            <option value='강동'>강동</option>
            <option value='관동동'>관동동</option>
            <option value='구산동'>구산동</option>
            <option value='내덕동'>내덕동</option>
            <option value='내동'>내동</option>
            <option value='대동면'>대동면</option>
            <option value='대성동'>대성동</option>
            <option value='대청동'>대청동</option>
            <option value='동상동'>동상동</option>
            <option value='명법동'>명법동</option>
            <option value='무계동'>무계동</option>
            <option value='봉황동'>봉황동</option>
            <option value='부곡동'>부곡동</option>
            <option value='부원동'>부원동</option>
            <option value='불암동'>불암동</option>
            <option value='삼계동'>삼계동</option>
            <option value='삼문동'>삼문동</option>
            <option value='삼방동'>삼방동</option>
            <option value='삼정동'>삼정동</option>
            <option value='상동면'>상동면</option>
            <option value='생림면'>생림면</option>
            <option value='서상동'>서상동</option>
            <option value='수가동'>수가동</option>
            <option value='신문동'>신문동</option>
            <option value='안동'>안동</option>
            <option value='어방동'>어방동</option>
            <option value='외동'>외동</option>
            <option value='유하동'>유하동</option>
            <option value='율하동'>율하동</option>
            <option value='응달동'>응달동</option>
            <option value='이동'>이동</option>
            <option value='장유동'>장유동</option>
            <option value='전하동'>전하동</option>
            <option value='주남동'>주남동</option>
            <option value='주진동'>주진동</option>
            <option value='중부동'>중부동</option>
            <option value='평산동'>평산동</option>
            <option value='하북면'>하북면</option>
            <option value='호계동'>호계동</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '남해군') {
        addressselect.innerHTML = `
            <option value='고현면'>고현면</option>
            <option value='남면'>남면</option>
            <option value='남해읍'>남해읍</option>
            <option value='미조면'>미조면</option>
            <option value='삼동면'>삼동면</option>
            <option value='상주면'>상주면</option>
            <option value='서면'>서면</option>
            <option value='설천면'>설천면</option>
            <option value='이동면'>이동면</option>
            <option value='창선면'>창선면</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '밀양시') {
        addressselect.innerHTML = `
            <option value='가곡동'>가곡동</option>
            <option value='교동'>교동</option>
            <option value='남포동'>남포동</option>
            <option value='내이동'>내이동</option>
            <option value='내일동'>내일동</option>
            <option value='단장면'>단장면</option>
            <option value='무안면'>무안면</option>
            <option value='부북면'>부북면</option>
            <option value='산내면'>산내면</option>
            <option value='산외면'>산외면</option>
            <option value='삼랑진읍'>삼랑진읍</option>
            <option value='상남면'>상남면</option>
            <option value='용평동'>용평동</option>
            <option value='청도면'>청도면</option>
            <option value='초동면'>초동면</option>
            <option value='하남읍'>하남읍</option>
            <option value='활성동'>활성동</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '사천시') {
        addressselect.innerHTML = `
            <option value='곤명면'>곤명면</option>
            <option value='곤양면'>곤양면</option>
            <option value='궁지동'>궁지동</option>
            <option value='노룡동'>노룡동</option>
            <option value='늑도동'>늑도동</option>
            <option value='대방동'>대방동</option>
            <option value='대포동'>대포동</option>
            <option value='동금동'>동금동</option>
            <option value='동동'>동동</option>
            <option value='동림동'>동림동</option>
            <option value='마도동'>마도동</option>
            <option value='백천동'>백천동</option>
            <option value='벌리동'>벌리동</option>
            <option value='봉남동'>봉남동</option>
            <option value='사남면'>사남면</option>
            <option value='사등동'>사등동</option>
            <option value='사천읍'>사천읍</option>
            <option value='서금동'>서금동</option>
            <option value='서동'>서동</option>
            <option value='서포면'>서포면</option>
            <option value='선구동'>선구동</option>
            <option value='송포동'>송포동</option>
            <option value='신벽동'>신벽동</option>
            <option value='신수동'>신수동</option>
            <option value='실안동'>실안동</option>
            <option value='와룡동'>와룡동</option>
            <option value='용강동'>용강동</option>
            <option value='용현면'>용현면</option>
            <option value='이금동'>이금동</option>
            <option value='이홀동'>이홀동</option>
            <option value='정동면'>정동면</option>
            <option value='좌룡동'>좌룡동</option>
            <option value='죽림동'>죽림동</option>
            <option value='축동면'>축동면</option>
            <option value='향촌동'>향촌동</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '산청군') {
        addressselect.innerHTML = `
            <option value='금서면'>금서면</option>
            <option value='단성면'>단성면</option>
            <option value='산청읍'>산청읍</option>
            <option value='삼장면'>삼장면</option>
            <option value='생비량면'>생비량면</option>
            <option value='생초면'>생초면</option>
            <option value='시천면'>시천면</option>
            <option value='신등면'>신등면</option>
            <option value='신안면'>신안면</option>
            <option value='오부면'>오부면</option>
            <option value='차황면'>차황면</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '양산시') {
        addressselect.innerHTML = `
            <option value='남부동'>남부동</option>
            <option value='다방동'>다방동</option>
            <option value='덕계동'>덕계동</option>
            <option value='동면'>동면</option>
            <option value='매곡동'>매곡동</option>
            <option value='명곡동'>명곡동</option>
            <option value='명동'>명동</option>
            <option value='물금읍'>물금읍</option>
            <option value='북부동'>북부동</option>
            <option value='북정동'>북정동</option>
            <option value='산막동'>산막동</option>
            <option value='삼호동'>삼호동</option>
            <option value='상북면'>상북면</option>
            <option value='소주동'>소주동</option>
            <option value='신기동'>신기동</option>
            <option value='어곡동'>어곡동</option>
            <option value='용당동'>용당동</option>
            <option value='원동면'>원동면</option>
            <option value='유산동'>유산동</option>
            <option value='주촌면'>주촌면</option>
            <option value='지내동'>지내동</option>
            <option value='진례면'>진례면</option>
            <option value='풍유동'>풍유동</option>
            <option value='한림면'>한림면</option>
            <option value='화목동'>화목동</option>
            <option value='흥동'>흥동</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '의령군') {
        addressselect.innerHTML = `
            <option value='가례면'>가례면</option>
            <option value='궁류면'>궁류면</option>
            <option value='낙서면'>낙서면</option>
            <option value='대의면'>대의면</option>
            <option value='봉수면'>봉수면</option>
            <option value='부림면'>부림면</option>
            <option value='용덕면'>용덕면</option>
            <option value='유곡면'>유곡면</option>
            <option value='의령읍'>의령읍</option>
            <option value='정곡면'>정곡면</option>
            <option value='지정면'>지정면</option>
            <option value='칠곡면'>칠곡면</option>
            <option value='화정면'>화정면</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '진주시') {
        addressselect.innerHTML = `
            <option value='가좌동'>가좌동</option>
            <option value='강남동'>강남동</option>
            <option value='계동'>계동</option>
            <option value='귀곡동'>귀곡동</option>
            <option value='금곡면'>금곡면</option>
            <option value='금산면'>금산면</option>
            <option value='남성동'>남성동</option>
            <option value='내동면'>내동면</option>
            <option value='대곡면'>대곡면</option>
            <option value='대안동'>대안동</option>
            <option value='대평면'>대평면</option>
            <option value='동성동'>동성동</option>
            <option value='망경동'>망경동</option>
            <option value='명석면'>명석면</option>
            <option value='문산읍'>문산읍</option>
            <option value='미천면'>미천면</option>
            <option value='본성동'>본성동</option>
            <option value='봉곡동'>봉곡동</option>
            <option value='봉래동'>봉래동</option>
            <option value='사봉면'>사봉면</option>
            <option value='상대동'>상대동</option>
            <option value='상봉동'>상봉동</option>
            <option value='상평동'>상평동</option>
            <option value='수곡면'>수곡면</option>
            <option value='수정동'>수정동</option>
            <option value='신안동'>신안동</option>
            <option value='옥봉동'>옥봉동</option>
            <option value='유곡동'>유곡동</option>
            <option value='이동'>이동</option>
            <option value='장대동'>장대동</option>
            <option value='장재동'>장재동</option>
            <option value='정촌면'>정촌면</option>
            <option value='주약동'>주약동</option>
            <option value='중안동'>중안동</option>
            <option value='지수면'>지수면</option>
            <option value='진성면'>진성면</option>
            <option value='집현면'>집현면</option>
            <option value='초전동'>초전동</option>
            <option value='충무공동'>충무공동</option>
            <option value='칠암동'>칠암동</option>
            <option value='판문동'>판문동</option>
            <option value='평거동'>평거동</option>
            <option value='평안동'>평안동</option>
            <option value='하대동'>하대동</option>
            <option value='하촌동'>하촌동</option>
            <option value='호탄동'>호탄동</option>
        `;
    }else if (citySelect.value=== '경상남도' && districtSelect.value === '창녕군') {
        addressselect.innerHTML = `
            <option value='계성면'>계성면</option>
            <option value='고암면'>고암면</option>
            <option value='길곡면'>길곡면</option>
            <option value='남지읍'>남지읍</option>
            <option value='대지면'>대지면</option>
            <option value='대합면'>대합면</option>
            <option value='도천면'>도천면</option>
            <option value='부곡면'>부곡면</option>
            <option value='성산면'>성산면</option>
            <option value='영산면'>영산면</option>
            <option value='유어면'>유어면</option>
            <option value='이방면'>이방면</option>
            <option value='장마면'>장마면</option>
            <option value='창녕읍'>창녕읍</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '통영시') {
        addressselect.innerHTML = `
            <option value='광도면'>광도면</option>
            <option value='당동'>당동</option>
            <option value='도남동'>도남동</option>
            <option value='도산면'>도산면</option>
            <option value='도천동'>도천동</option>
            <option value='동호동'>동호동</option>
            <option value='명정동'>명정동</option>
            <option value='무전동'>무전동</option>
            <option value='문화동'>문화동</option>
            <option value='미수동'>미수동</option>
            <option value='봉평동'>봉평동</option>
            <option value='북신동'>북신동</option>
            <option value='사량면'>사량면</option>
            <option value='산양읍'>산양읍</option>
            <option value='서호동'>서호동</option>
            <option value='욕지면'>욕지면</option>
            <option value='용남면'>용남면</option>
            <option value='인평동'>인평동</option>
            <option value='정량동'>정량동</option>
            <option value='중앙동'>중앙동</option>
            <option value='태평동'>태평동</option>
            <option value='평림동'>평림동</option>
            <option value='한산면'>한산면</option>
            <option value='항남동'>항남동</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '하동군') {
        addressselect.innerHTML = `
            <option value='고전면'>고전면</option>
            <option value='금남면'>금남면</option>
            <option value='금성면'>금성면</option>
            <option value='북천면'>북천면</option>
            <option value='악양면'>악양면</option>
            <option value='양보면'>양보면</option>
            <option value='옥종면'>옥종면</option>
            <option value='적량면'>적량면</option>
            <option value='진교면'>진교면</option>
            <option value='청암면'>청암면</option>
            <option value='하동읍'>하동읍</option>
            <option value='화개면'>화개면</option>
            <option value='횡천면'>횡천면</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '함안군') {
        addressselect.innerHTML = `
            <option value='가야읍'>가야읍</option>
            <option value='군북면'>군북면</option>
            <option value='대산면'>대산면</option>
            <option value='법수면'>법수면</option>
            <option value='산인면'>산인면</option>
            <option value='여항면'>여항면</option>
            <option value='칠북면'>칠북면</option>
            <option value='칠서면'>칠서면</option>
            <option value='칠원읍'>칠원읍</option>
            <option value='함안면'>함안면</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '함양군') {
        addressselect.innerHTML = `
            <option value='마천면'>마천면</option>
            <option value='백전면'>백전면</option>
            <option value='병곡면'>병곡면</option>
            <option value='서상면'>서상면</option>
            <option value='서하면'>서하면</option>
            <option value='수동면'>수동면</option>
            <option value='안의면'>안의면</option>
            <option value='유림면'>유림면</option>
            <option value='지곡면'>지곡면</option>
            <option value='함양읍'>함양읍</option>
            <option value='휴천면'>휴천면</option>
        `;
    }
    else if (citySelect.value=== '경상남도' && districtSelect.value === '합천군') {
        addressselect.innerHTML = `
            <option value='가야면'>가야면</option>
            <option value='가회면'>가회면</option>
            <option value='대병면'>대병면</option>
            <option value='대양면'>대양면</option>
            <option value='덕곡면'>덕곡면</option>
            <option value='묘산면'>묘산면</option>
            <option value='봉산면'>봉산면</option>
            <option value='삼가면'>삼가면</option>
            <option value='쌍백면'>쌍백면</option>
            <option value='쌍책면'>쌍책면</option>
            <option value='야로면'>야로면</option>
            <option value='용주면'>용주면</option>
            <option value='율곡면'>율곡면</option>
            <option value='적중면'>적중면</option>
            <option value='청덕면'>청덕면</option>
            <option value='초계면'>초계면</option>
            <option value='합천읍'>합천읍</option>
        `;
    }else if (citySelect.value=== '제주도' && districtSelect.value === '서귀포시') {
        addressselect.innerHTML = `
            <option value='강정동'>강정동</option>
            <option value='남원읍'>남원읍</option>
            <option value='대정읍'>대정읍</option>
            <option value='대포동'>대포동</option>
            <option value='도순동'>도순동</option>
            <option value='동홍동'>동홍동</option>
            <option value='법환동'>법환동</option>
            <option value='보목동'>보목동</option>
            <option value='상예동'>상예동</option>
            <option value='상효동'>상효동</option>
            <option value='색달동'>색달동</option>
            <option value='서귀동'>서귀동</option>
            <option value='서호동'>서호동</option>
            <option value='서홍동'>서홍동</option>
            <option value='성산읍'>성산읍</option>
            <option value='신효동'>신효동</option>
            <option value='안덕면'>안덕면</option>
            <option value='영남동'>영남동</option>
            <option value='월평동'>월평동</option>
            <option value='중문동'>중문동</option>
            <option value='토평동'>토평동</option>
            <option value='표선면'>표선면</option>
            <option value='하예동'>하예동</option>
            <option value='하원동'>하원동</option>
            <option value='하효동'>하효동</option>
            <option value='호근동'>호근동</option>
            <option value='회수동'>회수동</option>
        `;
    }
    else if (citySelect.value=== '제주도' && districtSelect.value === '제주시') {
        addressselect.innerHTML = `
            <option value='건입동'>건입동</option>
            <option value='구좌읍'>구좌읍</option>
            <option value='내도동'>내도동</option>
            <option value='노형동'>노형동</option>
            <option value='도남동'>도남동</option>
            <option value='도두이동'>도두이동</option>
            <option value='도두일동'>도두일동</option>
            <option value='도련이동'>도련이동</option>
            <option value='도련일동'>도련일동</option>
            <option value='도평동'>도평동</option>
            <option value='봉개동'>봉개동</option>
            <option value='삼도이동'>삼도이동</option>
            <option value='삼도일동'>삼도일동</option>
            <option value='삼양삼동'>삼양삼동</option>
            <option value='삼양이동'>삼양이동</option>
            <option value='삼양일동'>삼양일동</option>
            <option value='아라이동'>아라이동</option>
            <option value='아라일동'>아라일동</option>
            <option value='애월읍'>애월읍</option>
            <option value='연동'>연동</option>
            <option value='영평동'>영평동</option>
            <option value='오등동'>오등동</option>
            <option value='오라삼동'>오라삼동</option>
            <option value='오라이동'>오라이동</option>
            <option value='오라일동'>오라일동</option>
            <option value='외도이동'>외도이동</option>
            <option value='외도일동'>외도일동</option>
            <option value='용강동'>용강동</option>
            <option value='용담삼동'>용담삼동</option>
            <option value='용담이동'>용담이동</option>
            <option value='용담일동'>용담일동</option>
            <option value='우도면'>우도면</option>
            <option value='이도이동'>이도이동</option>
            <option value='이도일동'>이도일동</option>
            <option value='이호이동'>이호이동</option>
            <option value='이호일동'>이호일동</option>
            <option value='일도이동'>일도이동</option>
            <option value='일도일동'>일도일동</option>
            <option value='조천읍'>조천읍</option>
            <option value='추자면'>추자면</option>
            <option value='한경면'>한경면</option>
            <option value='한림읍'>한림읍</option>
            <option value='해안동'>해안동</option>
            <option value='화북이동'>화북이동</option>
            <option value='화북일동'>화북일동</option>
            <option value='회천동'>회천동</option>
        `;
    }



    // 다른 구에 대한 조건문을 추가로 작성해 주세요.
});

// // "검색" 버튼 클릭 시 주소 검색 수행
// const searchBtn = document.getElementById("searchBtn");
// searchBtn.addEventListener("click", function() {
//     const city = citySelect.value;
//     const district = districtSelect.value;
//     const address = document.getElementById("address").value;
//
//     const result = city + " " + district + " " + address
//     console.log(result)
//
// })

// 주소 검색을 수행하는 코드를 추가해 주세요
// 예: window.location.href = `/search?city=${city}&district=${district}`;

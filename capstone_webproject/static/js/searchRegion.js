// "시/도" 선택 시 해당 시의 "시/구/군" 옵션을 동적으로 변경
const citySelect = document.getElementById("city");
const districtSelect = document.getElementById("district");
const addressselect = document.getElementById("address")

citySelect.addEventListener("change", function() {
    const city = citySelect.value;
    if (city === "서울시") {
        districtSelect.innerHTML = `
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
        <option value="동구">동구</option>
        <option value="중구">중구</option>
        <option value="서구">서구</option>
        <option value="유성구">유성구</option>
        <option value="대덕구">대덕구</option>
        <!-- 다른 구들을 추가해 주세요 -->
    `;
    } else if (city == "부산시") {
        districtSelect.innerHTML = `
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
        <option value="강화군">강화군</option>
        <option value="계양구">계양구</option>
        <option value="남구">남구</option>
        <option value="남동구">남동구</option>
        <option value="동구">동구</option>
        <option value="부평구">부평구</option>
        <option value="서구">서구</option>
        <option value="연수구">연수구</option>
        <option value="옹진군">옹진군</option>
        <option value="중구">중구</option>
    `;
    } else if (city === "광주시") {
        districtSelect.innerHTML = `
        <option value="광산구">광산구</option>
        <option value="남구">남구</option>
        <option value="동구">동구</option>
        <option value="북구">북구</option>
        <option value="서구">서구</option>
    `;
    } else if (city === "울산시") {
        districtSelect.innerHTML = `
        <option value="남구">남구</option>
        <option value="동구">동구</option>
        <option value="북구">북구</option>
        <option value="울주군">울주군</option>
        <option value="중구">중구</option>
    `;
    } else if (city === "대구시") {
        districtSelect.innerHTML = `
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
        <option value="세종시">세종시</option>
    `;
    } else if (city === "경기도") {
        districtSelect.innerHTML = `
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
        <option value="Jeonju-si">전주시</option>
        <option value="정읍시">정읍시</option>
        <option value="진안군">진안군</option>
    `;
    } else if (city === "전라남도") {
        districtSelect.innerHTML = `
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
            <option value='포이동'>포이동</option>
            <option value='학동'>학동</option>
            <option value='현림동'>현림동</option>
            <option value='현충로'>현충로</option>
            <option value='화곡동'>화곡동</option>
        `;
    }

    else if (citySelect.value === '서울시' && districtSelect.value === '강동구') {
        addressselect.innerHTML = `
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
            <option value='삼각산동'>삼각산동</option>
            <option value='송중동'>송중동</option>
            <option value='송천동'>송천동</option>
            <option value='수유동'>수유동</option>
            <option value='우이동'>우이동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '강서구') {
        addressselect.innerHTML = `
            <option value='가양동'>가양동</option>
            <option value='공항동'>공항동</option>
            <option value='내발산동'>내발산동</option>
            <option value='등촌동'>등촌동</option>
            <option value='마곡동'>마곡동</option>
            <option value='염창동'>염창동</option>
            <option value='외발산동'>외발산동</option>
            <option value='화곡동'>화곡동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '관악구') {
        addressselect.innerHTML = `
            <option value='낙성대동'>낙성대동</option>
            <option value='남현동'>남현동</option>
            <option value='봉천동'>봉천동</option>
            <option value='서원동'>서원동</option>
            <option value='신림동'>신림동</option>
            <option value='신사동'>신사동</option>
            <option value='신원동'>신원동</option>
            <option value='은천동'>은천동</option>
            <option value='인헌동'>인헌동</option>
            <option value='조원동'>조원동</option>
            <option value='중앙동'>중앙동</option>
            <option value='청림동'>청림동</option>
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
            <option value='도봉산동'>도봉산동</option>
            <option value='방학동'>방학동</option>
            <option value='쌍문동'>쌍문동</option>
            <option value='창동'>창동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '동대문구') {
        addressselect.innerHTML = `
            <option value='답십리2동'>답십리2동</option>
            <option value='답십리동'>답십리동</option>
            <option value='신답동'>신답동</option>
            <option value='신설동'>신설동</option>
            <option value='용두동'>용두동</option>
            <option value='이문동'>이문동</option>
            <option value='장안동'>장안동</option>
            <option value='장한평동'>장한평동</option>
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
            <option value='본동'>본동</option>
            <option value='봉천동'>봉천동</option>
            <option value='사당동'>사당동</option>
            <option value='상도1동'>상도1동</option>
            <option value='상도2동'>상도2동</option>
            <option value='상도3동'>상도3동</option>
            <option value='상도4동'>상도4동</option>
            <option value='상도5동'>상도5동</option>
            <option value='상도6동'>상도6동</option>
            <option value='상도7동'>상도7동</option>
            <option value='신대방동'>신대방동</option>
            <option value='흑석동'>흑석동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '마포구') {
        addressselect.innerHTML = `
            <option value='당인동'>당인동</option>
            <option value='도화동'>도화동</option>
            <option value='동교동'>동교동</option>
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
            <option value='홍은동'>홍은동</option>
        `;
    }
    else if (citySelect.value === '서울시' && districtSelect.value === '서대문구') {
        addressselect.innerHTML = `
            <option value='남가좌동'>남가좌동</option>
            <option value='북가좌동'>북가좌동</option>
            <option value='북아현동'>북아현동</option>
            <option value='신촌동'>신촌동</option>
            <option value='연희동'>연희동</option>
            <option value='창천동'>창천동</option>
            <option value='천연동'>천연동</option>
            <option value='충정로2가'>충정로2가</option>
            <option value='홍은동'>홍은동</option>
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
            <option value='신도림동'>신도림동</option>
            <option value='신월동'>신월동</option>
            <option value='신정동'>신정동</option>
            <option value='양평동'>양평동</option>
            <option value='오류동'>오류동</option>
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

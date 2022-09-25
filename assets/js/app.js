const getNewUserInfo = () => {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => displayUserInfo(data))
}


const displayUserInfo = (data) => {
    
    const userInfo = data.results[0];

    document.getElementById("displayUserPhoto").src = userInfo.picture.large;

    const userName = `${userInfo.name.first} ${userInfo.name.last}`;
    document.getElementById("displayUserName").innerText = userName;

    const userFullName = `${userInfo.name.title}. ${userInfo.name.first} ${userInfo.name.last}`;
    document.getElementById("displayUserFullName").innerText = userFullName;

    const userEmailAddress = userInfo.email;
    document.getElementById("displayUserEmail").innerText = userEmailAddress;

    const userPhoneNumber = userInfo.phone;
    document.getElementById("displayUserPhoneNumber").innerText = userPhoneNumber;

    const userGender = userInfo.gender;
    document.getElementById("displayUserGander").innerText = userGender;

    let userDOB = new Date(userInfo.dob.date);
    userDOB = `${userDOB.getDate()}/${userDOB.getMonth() + 1}/${userDOB.getFullYear()} (${userInfo.dob.age} years old)`
    document.getElementById("displayUserDOB").innerText = userDOB;

    const userAddress = `Street: ${userInfo.location.street.number} ${userInfo.location.street.name}, City: ${userInfo.location.city}, State: ${userInfo.location.state}, ${userInfo.location.country}.`;
    document.getElementById("displayUserAddress").innerText = userAddress;

    const userPostCode = userInfo.location.postcode;
    document.getElementById("displayUserPostcode").innerText = userPostCode;

    const userSSNNumber = userInfo.id.value;
    document.getElementById("displayUserSSNNumber").innerText = userSSNNumber;
}


getNewUserInfo();


document.getElementById("copyUserFullName").addEventListener('click', () => {
    copyUserInfoToClipboard("displayUserFullName");
});

document.getElementById("copyUserEmail").addEventListener('click', () => {
    copyUserInfoToClipboard("displayUserEmail");
});

document.getElementById("copyUserPhoneNumber").addEventListener('click', () => {
    copyUserInfoToClipboard("displayUserPhoneNumber");
});

document.getElementById("copyUserGander").addEventListener('click', () => {
    copyUserInfoToClipboard("displayUserGander");
});

document.getElementById("copyUserDOB").addEventListener('click', () => {
    copyUserInfoToClipboard("displayUserDOB");
});

document.getElementById("copyUserAddress").addEventListener('click', () => {
    copyUserInfoToClipboard("displayUserAddress");
});

document.getElementById("copyUserPostcode").addEventListener('click', () => {
    copyUserInfoToClipboard("displayUserPostcode");
});

document.getElementById("copyUserSSNNumber").addEventListener('click', () => {
    copyUserInfoToClipboard("displayUserSSNNumber");
});


const copyUserInfoToClipboard = id => {
    const copyText = document.getElementById(id).innerText;
    if(copyText) {
        navigator.clipboard.writeText(copyText).then(() => {
        });
    
        document.getElementById("copiedToClipboardMessage").innerText = `Copied: "${copyText}"`;
    
        const copiedToClipboardToastTrigged = document.getElementById('copiedToClipboardToast')
        const toast = new bootstrap.Toast(copiedToClipboardToastTrigged)
        toast.show()
    }
}

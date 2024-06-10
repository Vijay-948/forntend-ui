import globalobject from "./global-variable";


export function redirectToLogin() {
    window.location.href = `/login?form=${btoa(window.location.pathname + window.location.search)}`;
}

export function getFormattedNameAndInitials(userObj: any) {
    let initials = '';
    
    if (userObj.firstName) {
        userObj.firstName = userObj.firstName.charAt(0).toUpperCase() + userObj.firstName.slice(1).toLowerCase();
        initials += userObj.firstName[0];
    }

    if (userObj.lastName) {
        userObj.lastName = userObj.lastName.charAt(0).toUpperCase() + userObj.lastName.slice(1).toLowerCase();
        initials += userObj.lastName[0];
    }

    return {
        initials: initials,
        firstName: userObj.firstName,
        lastName: userObj.lastName
    };
}
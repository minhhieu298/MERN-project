export function createUrl(urlData) {
    const keys = Object.keys(urlData);
    let search = '?';
    keys.forEach((key) => {
        if (urlData[key] !== null && urlData[key] !== '') {
            search += `${key}=${urlData[key]}&`;
        }
    });
    return search.substring(0, search.length - 1);
}

export function getUrl(location) {
    const data = location.search
        ? location.search.slice(location.search.indexOf('?') + 1).split('&')
        : [];
    const urlData = {};
    data.forEach((data) => {
        try {
            data = data.split('=');
            const dataVal = decodeURIComponent(data[1]);
            urlData[data[0]] = dataVal;
        } catch (e) { }
    });
    return urlData;
}

export function setStateToUrl(state) {
    let urlData = {};
    for (const key in state) {
        if (state.hasOwnProperty(key)) {
            switch (key) {

                case 'sort':
                    urlData[key] =
                        state[key] ? state[key] : null;
                    break;

                case 'q':
                    urlData[key] =
                        state[key] ? state[key] : null;
                    break;

                case 'reset':
                    urlData = state[key];
                    break;

                default:
                    urlData[key] = state[key];
                    break;
            }
        }
    }
    return createUrl(urlData)
}

export function getStateFromUrl(location) {
    const urlData = getUrl(location);
    const state = {};

    for (const key in urlData) {
        if (urlData.hasOwnProperty(key)) {
            switch (key) {

                case 'sort':
                    state[key] =
                        urlData[key] && urlData[key] !== 'null'
                            ? urlData[key]
                            : '';
                    break;

                case 'q':
                    state[key] =
                        urlData[key] && urlData[key] !== 'null'
                            ? urlData[key]
                            : '';
                    break;

                case 'page':
                    if (urlData[key]) {
                        state['page'] = Number(urlData[key]);
                    }
                    break;

                default:
                    state[key] = urlData[key];
                    break;
            }
        }
    }
    return state;
}
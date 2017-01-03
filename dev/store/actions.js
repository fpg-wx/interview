import types from './mutation-types';

import contentful from 'contentful-management';

const accessToken = '31091dca9128fe769d67d8ea32d03f991a8920dc1c822204ada172e792a0d549';
const spaceID = '0s9519swmi94';
const entryUser = 'user';

const client = contentful.createClient({
    accessToken,
});

export default {
    updateBasicInfo({commit}, info) {
        commit(types.UPDATE_INFO, {
            type: 'basicInfo',
            info,
        });
    },
    updateEduInfo({commit}, info) {
        commit(types.UPDATE_INFO, {
            type: 'eduInfo',
            info,
        });
    },
    updateWorkInfo({commit}, info) {
        commit(types.UPDATE_INFO, {
            type: 'workInfo',
            info,
        });
    },
    submitUserInfo({state}) {
        const fields = {};
        const combineInfo = {
            ...state.basicInfo,
            ...state.eduInfo,
            ...state.workInfo,
        };

        for (const prop in combineInfo) {
            if (prop === 'edited') continue;

            fields[prop] = {
                'en-US': combineInfo[prop],
            };
        }

        console.log('==========', fields);

        client.getSpace(spaceID)
        .then(space => {
            // space.getEntries()
            // .then(entries => console.log(entries));

            space.createEntry(entryUser, {
                fields,
            })
            .then(e => console.log(e));
        });
    },
};

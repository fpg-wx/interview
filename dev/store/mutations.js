import types from './mutation-types';

export default {
    [types.UPDATE_INFO](state, infoObj) {
        state[infoObj.type] = {
            ...infoObj.info,
            edited: true,
        };

        console.log(`========== set ${infoObj.type} successfully`);
    },
};

export enum ActionTypes {
	FETCH_CDN_SETTINGS_REQUEST,
	FETCH_CDN_SETTINGS_SUCCESS,
	FETCH_CDN_SETTINGS_ERROR,
	FETCH_ORIGINS_REQUEST,
	FETCH_ORIGINS_SUCCESS,
	FETCH_ORIGINS_ERROR,
	FETCH_FILETYPES_REQUEST,
	FETCH_FILETYPES_SUCCESS,
	FETCH_FILETYPES_ERROR,
	TOGGLE_CDN_CONFIRM,
	TOGGLE_CDN_CONFIRM_YES,
	TOGGLE_CDN_CONFIRM_NO,
	TOGGLE_CDN_REQUEST,
	TOGGLE_CDN_SUCCESS,
	TOGGLE_CDN_ERROR,
}

export type Action =
	{ type: ActionTypes.FETCH_CDN_SETTINGS_REQUEST } |
	{ type: ActionTypes.FETCH_CDN_SETTINGS_SUCCESS, payload: string } |
	{ type: ActionTypes.FETCH_CDN_SETTINGS_ERROR, payload: string } |
	{ type: ActionTypes.FETCH_ORIGINS_REQUEST } |
	{ type: ActionTypes.FETCH_ORIGINS_SUCCESS, payload: string[] } |
	{ type: ActionTypes.FETCH_ORIGINS_ERROR, payload: string } |
	{ type: ActionTypes.FETCH_FILETYPES_REQUEST } |
	{ type: ActionTypes.FETCH_FILETYPES_SUCCESS, payload: string[] } |
	{ type: ActionTypes.FETCH_FILETYPES_ERROR, payload: string } |
	{ type: ActionTypes.TOGGLE_CDN_REQUEST } |
	{ type: ActionTypes.TOGGLE_CDN_SUCCESS, payload: boolean } |
	{ type: ActionTypes.TOGGLE_CDN_ERROR, payload: string };

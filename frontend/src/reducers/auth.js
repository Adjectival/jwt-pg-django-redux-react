import jwtDecode from 'jwt-decode';
import * as auth  from '../actions/auth';

const initialState = {
	access: undefined,
	refresh: undefined,
	errors: {},
}
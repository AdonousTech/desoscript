import { IUser } from './i-user';


/**
 * See
 * https://github.com/bitclout/frontend/blob/100c6f1cf40dd637ed191a95eca59ddbdf025aa2/src/lib/observable-results/logged-in-user-observable-result.ts
 * @export
 * @interface ILoggedInUserObservableResult
 */
export interface ILoggedInUserObservableResult {
    loggedInUser: IUser;
    isSameUserAsBefore: boolean;
}
import { login } from "./login";

describe('login function', ()=>{
    const alertMock = jest.fn();
    window.alert = alertMock;
    it('should show an alert with welcome message', ()=>{
        login();
        expect(alertMock).toBeCalledWith("Seja bem-vindo!")
    })
})
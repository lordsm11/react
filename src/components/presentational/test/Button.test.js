import Button from './Button';
import expect, { createSpy, spyOn, isSpy } from 'expect'
import { shallow, configure  } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

// tslint:disable-next-line:no-any
configure({ adapter: new Adapter() });

describe('<Button />', () => {
    it('renders a <button>', () => {
        const renderedComponent = shallow(
            <Button></Button>
        );
        expect(renderedComponent.find("button").getElement()).toBeDefined();
    });

    it('renders text', () => {
        const text = "Click me!";
        const renderedComponent = shallow(
            <Button>{ text }</Button>
        );

        expect(
            renderedComponent.contains(text)
        ).toEqual(true);
    });

    it('handles clicks', () => {
        const onClickSpy = expect.createSpy();
        const renderedComponent = shallow(
            <Button onClick={onClickSpy} />
        );

        renderedComponent.find('button').simulate('click');

        expect(onClickSpy).toHaveBeenCalled();
    });
});
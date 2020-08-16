import React, { useState } from 'react';
import styled from 'styled-components';

const NewListingContainer = styled.div`
  height: calc(100vh - 120px - 20px);
  width: 100vw;
  margin: 120px 0 0 0;
  padding: 20px 0 0 0;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
`;

const Intro = styled.p`
  margin: 0 20px 15px 20px;
`;

const Header = styled.div`
  position: fixed;
  top: 60px;
  left: 0px;
  height: 60px;
  width: 100vw;
  background: black;
  border-bottom: 1px solid #454545;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.span`
  height: 60px;
  margin: 0 0 0 20px;
  border-bottom: 1px solid #454545;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const FormStyles = styled.form`
  margin: 0 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: flex-start;
`;

const FormElement = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  margin: 10px 0 0 0;
`;

const Label = styled.label`
  margin: 0 10px 0 0;
  width: 120px;
`;

const NumberInput = styled.input.attrs({
  type: 'number',
})`
  -moz-appearance: textfield;
`;

const SubmitButton = styled.button`
  height: 30px;
  width: 160px;
  padding: 5px 10px;
  background: #9df9ef;
  border: 1px solid #8e8e8e;
  border-radius: 2px;
  font-size: 1em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

const NewListing = () => {
  const initialState = {
    fields: {
      make: '',
      model: '',
      year: 1990,
      price: 10000,
      location: '',
      email: '',
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <NewListingContainer>
      <Header>
        <HeaderText>Create A New Listing</HeaderText>
      </Header>

      <Intro>
        Every year thousands of people get a great deal on their (tiny) cars
        using our service. Simply fill in the form below and wait for the emails
        to come in.
      </Intro>

      <FormStyles>
        <FormElement>
          <Label htmlFor="make">Make</Label>
          <input
            type="text"
            id="make"
            name="make"
            placeholder=""
            value={fields.make}
            onChange={handleFieldChange}
            required
          />
        </FormElement>

        <FormElement>
          <Label htmlFor="model">Model</Label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder=""
            value={fields.model}
            onChange={handleFieldChange}
            required
          />
        </FormElement>

        <FormElement>
          <Label htmlFor="year">Year</Label>
          <NumberInput
            id="year"
            name="year"
            placeholder=""
            value={fields.year}
            type="number"
            min="1886"
            step="1"
            onWheel={(event) => event.preventDefault()}
            onChange={handleFieldChange}
            required
          />
        </FormElement>

        <FormElement>
          <Label htmlFor="price">Price (£)</Label>
          <NumberInput
            id="price"
            name="price"
            placeholder=""
            value={fields.price}
            type="number"
            min="0"
            step="1"
            onWheel={(event) => event.preventDefault()}
            onChange={handleFieldChange}
            required
          />
        </FormElement>

        <FormElement>
          <Label htmlFor="location">Location</Label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder=""
            value={fields.location}
            onChange={handleFieldChange}
            required
          />
        </FormElement>

        <FormElement>
          <Label htmlFor="email">Email:</Label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            value={fields.email}
            onChange={handleFieldChange}
            required
          />
        </FormElement>

        <FormElement>
          <SubmitButton type="submit">
            <p>Create Listing!</p>
          </SubmitButton>
        </FormElement>
      </FormStyles>
    </NewListingContainer>
  );
};

export default NewListing;

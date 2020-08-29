import React, { useState } from 'react';
import styled from 'styled-components';
import postListing from '../controllers/newListingController';
import road5 from '../assets/images/roads/road5.png';

const Header = styled.div`
  position: fixed;
  top: 60px;
  left: 0px;
  height: 60px;
  width: 100vw;
  background: black;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  span {
    height: 60px;
    margin: 0 0 0 20px;
    font-size: 1.5em;
    font-weight: bold;
    color: white;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
`;

const NewListingContainer = styled.div`
  min-height: calc(100vh - 120px);
  width: 100vw;
  margin: 120px 0 0 0;
  color: white;
  background-image: url(${road5});
  background-position: bottom;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
`;

const MainContainer = styled.div`
  min-height: calc(100vh - 120px - 20px);
  width: 100vw;
  max-width: 360px;
  padding: 20px 0 0 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    min-height: auto;
    margin: 60px;
    padding: 60px 50px;
    border-radius: 20px;

  }
`;

const Intro = styled.p`
  width: calc(100% - 40px);
  max-width: 320px;
  margin: 0 20px 15px 20px;

  @media (min-width: 360px) {
    font-size: 1.2em;
  }

  @media (min-width: 768px) {
    font-size: 1.4em;
  }
`;

const FormStyles = styled.form`
  width: 280px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: flex-start;
`;

const FormElement = styled.div`
  width: 280px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  margin: 10px 0 0 0;

  @media (min-width: 460px) {
    font-size: 1.2em;
  }
`;

const Label = styled.label`
  width: 120px;
`;

const NumberInput = styled.input.attrs({
  type: 'number',
})`
  -moz-appearance: textfield;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const SubmitButton = styled.button`
  height: 40px;
  width: 56%;
  max-width: 140px;
  margin: 30px 0;
  font-size: 1.2em;
  color: black;
  font-family: 'Contrail One', Helvetica, sans-serif;
  font-weight: bold;
  background: whitesmoke;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  top: 60px;
  left: 0px;
  height: fit-content;
  width: 80vw;
  max-width: 320px;
  color: #FDFD9B;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 460px) {
    font-size: 1.2em;
  }
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
      authorization: '',
    },
    alert:
      'NB: This is a demo site. For practical purposes an authorization code is required for users to submit lisitings.',
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddListing = async (event) => {
    event.preventDefault();
    setAlert('');
    const res = await postListing(fields);
    if (res.status === 201) {
      setAlert('Your listing has been added to TinyCarList!');
    }
    if (res === 401) {
      setAlert(
        'Sorry, you are not authorized to add listings to TinyCarList. An incorrect authorization password was entered.'
      );
    }
  };

  return (
    <NewListingContainer>
      <Header>
        <span>Create A New Listing</span>
      </Header>

      <MainContainer>
        <Intro>
          Every year thousands of people get a great deal on their (tiny) cars
          using our service. Simply fill in the form below and wait for the
          emails to come in.
        </Intro>

        <FormStyles onSubmit={handleAddListing}>
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
            <Label htmlFor="authorization">Authorization:</Label>
            <input
              type="authorization"
              id="authorization"
              name="authorization"
              placeholder="********"
              value={fields.authorization}
              onChange={handleFieldChange}
              required
            />
          </FormElement>

          <ButtonContainer>
            <SubmitButton type="submit">
              <p>Submit Listing!</p>
            </SubmitButton>
          </ButtonContainer>

          <Footer>{alert}</Footer>
        </FormStyles>
      </MainContainer>
    </NewListingContainer>
  );
};

export default NewListing;

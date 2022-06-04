import React from 'react';
import Form from 'react-bootstrap/Form';

const FilterForm = () => {
	return (
		<Form>
			<fieldset>
				<Form.Group>
					<Form.Label htmlFor="car-title">Search by car title:</Form.Label>
					<Form.Control type="text" id="car-title" name="car-title" />
				</Form.Group>

				<Form.Group>
					<Form.Label htmlFor="car-vin">Search by VIN:</Form.Label>
					<Form.Control type="text" id="car-vin" name="car-vin" />
				</Form.Group>
			</fieldset>
			<fieldset>
				<Form.Group>
					<Form.Label htmlFor="sort-by">Sort by</Form.Label>
					<Form.Select name="sort-by" id="sort-by">
						<option value="new">new</option>
						<option value="old">old</option>
						<option value="title_asc">title asc</option>
						<option value="title_desc">title desc</option>
					</Form.Select>
				</Form.Group>
			</fieldset>
		</Form>
	);
};

export default FilterForm;

import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';

import Card from './components/Card';
import CardList from './components/CardList';
import FilterForm from './components/FilterForm';
import './App.css';

interface Car {
	id: number;
	model: string;
	make: string;
	year: number;
	VIN: string;
	color: string;
}

function App() {
	const [data, setData] = useState<Car[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch('server/MOCK_DATA.json');
			const jsonData = await response.json();
			setData(jsonData as Car[]);
		})();
	}, []);

	return (
		<Container>
			<header className="mb-4">
				<Row>
					<h1>Car delivery</h1>
				</Row>
				<Row>
					<Column>
						<FilterForm />
					</Column>
				</Row>
			</header>
			<main>
				<Row className="mb-4">
					<Column>
						<CardList>
							{data.slice(0, 10).map(({ id, make, model, color, VIN, year }) => (
								<Card
									key={id}
									title={`${make} ${model}`}
									color={color}
									specifications={[
										{
											key: 'ID',
											value: id,
										},
										{
											key: 'VIN',
											value: VIN,
										},
										{
											key: 'Year',
											value: year,
										},
									]}
								/>
							))}
						</CardList>
					</Column>
				</Row>

				<Row>
					{/* className="d-flex justify-content-center" */}
					<Column>
						<Form.Select>
							<option value="10">10</option>
							<option value="20">20</option>
							<option value="50">50</option>
							<option value="100">100</option>
						</Form.Select>
					</Column>
					<Column>
						<Pagination>
							<Pagination.First />
							<Pagination.Prev />
							<Pagination.Item>{1}</Pagination.Item>
							<Pagination.Ellipsis />

							<Pagination.Item>{10}</Pagination.Item>
							<Pagination.Item>{11}</Pagination.Item>
							<Pagination.Item active>{12}</Pagination.Item>
							<Pagination.Item>{13}</Pagination.Item>
							<Pagination.Item disabled>{14}</Pagination.Item>

							<Pagination.Ellipsis />
							<Pagination.Item>{20}</Pagination.Item>
							<Pagination.Next />
							<Pagination.Last />
						</Pagination>
					</Column>
				</Row>
			</main>
		</Container>
	);
}

export default App;

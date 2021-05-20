import { CategoryList, Cat, LinkCat  } from './styles';
import api from 'services/api';
import { category, } from 'types/types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLists, setCategory } from 'store/actions/listActions';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link} from 'react-router-dom'


type productData = {
    categories: category[];
}
const NavBar = (click: any) => {
    const dispatch = useDispatch();
    const [productData, setProductData] = useState<productData>({
        categories: [],
    });

    useEffect(() => {
        api.get('categories')
            .then(response => {
                const data = response.data as category[];
                const category = data.map(x => x);
                setProductData({ categories: category });
            });
    }, []);
    useEffect(() => {
        dispatch(getLists());
    }, [dispatch]);

    const handleAddCategory = (cat: category) => {
        dispatch(setCategory(cat.id));
    };
    return (
        <>
            <Container>
                <CategoryList >
                    <Navbar  expand="lg">
                        <Navbar.Brand>
                            <LinkCat to="/">
                                Categorias:
                            </LinkCat>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                {productData.categories.map((cat) =>
                                <Cat key={cat.title.toString()}>
                                    <Nav.Link as={Link} to="/category" onClick={() => handleAddCategory(cat)}>{cat.title}</Nav.Link>
                                </Cat>

                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </CategoryList>
            </Container>
        </>

    );
}
export default NavBar;
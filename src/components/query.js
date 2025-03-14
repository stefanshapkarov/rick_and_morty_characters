import { gql } from '@apollo/client';

export const getCharacters = (page = 1, status = '', species = '') => {

    let filterString = '';

    if (status !== '') {
        filterString += `, filter: { status: "${status}"`;
        if (species === '') {
            filterString += ` }`;
        }
    }

    if (species !== '') {
        if (filterString != '') {
            filterString += `, species: "${species}" }`;
        } else {
            filterString += `, filter: { species: "${species}" }`;
        }
    }

    return gql`query {
                characters(page: ${page}${filterString}) {
                    info {
                        count
                        pages
                    }
                    results {
                        name 
                        status 
                        species 
                        gender 
                        origin {
                            name
                        }
                    }
                }
            }
`;
}
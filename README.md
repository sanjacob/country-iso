# Country ISO Lookup


## Inputs

### `name`

**Required** The name of the country, either in English or native.


## Outputs

### `iso-2`

ISO 3166-1 alpha-2 Code for the country entered.

### `iso-3`

ISO 3166-1 alpha-3 Code for the country entered.

### `name`

Official name of the country in English.

### `native`

Official name of the country in its own official language.

### `continent`

Continent code of the country.


## Notes

- This action uses no API (thankfully).
- Please do not expect magic.


## Example

```yaml
- uses: sanjacob/country-code@v1
  id: country
  with:
    name: United Kingdom

- name: Get the code
  run: echo "${{ steps.country.outputs.iso-2 }}"
```


## License

This software is distributed under the [3-Clause BSD License][license].

[license]: LICENSE

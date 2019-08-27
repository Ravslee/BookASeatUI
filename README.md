# Neutrinos


Consider making a dynamic grid layout component for an application like BookMyShow. This component generates view based on certain configurations provided from Backend.
Configurations from the backend includes (can be mocked in a json file):
Size of the grid:
{ rowSize: 20, columnSize: 20}
Two-dimensional state array – showing unavailable seats:
[{column: 1, row: 1}, {column: 3, row: 2}]

User story:
A user should be able to select available seats from the UI generated from the configuration and submit it.
A user should be able to refresh the page and see the user selected seats and be able to edit the selections.

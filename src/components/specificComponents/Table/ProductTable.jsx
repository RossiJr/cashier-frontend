import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridLogicOperator,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../../../themes/darkTheme'; // Adjust the path to where your theme file is located



function QuickSearchToolbar() {
  return (
    <GridToolbarContainer>
      <Box
        sx={{
          p: 0.5,
          pb: 0,
          width: '100%',
        }}
      >
        <GridToolbarQuickFilter
          quickFilterParser={(searchInput) =>
            searchInput
              .split(',')
              .map((value) => value.trim())
              .filter((value) => value !== '')
          }
        />
      </Box>
    </GridToolbarContainer>
  );
}

const VISIBLE_FIELDS = ['name', 'dateCreated', 'isAdmin'];

export default function ProductTable() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  // Define column widths
  const columns = React.useMemo(
    () =>
      data.columns
        .filter((column) => VISIBLE_FIELDS.includes(column.field))
        .map((column) => {
          if (column.field === 'name') {
            return { ...column, flex: 8 };
          }
          return { ...column, flex: 1 };
        }),
    [data.columns],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          {...data}
          columns={columns}
          initialState={{
            ...data.initialState,
            filter: {
              ...data.initialState?.filter,
              filterModel: {
                items: [],
                quickFilterLogicOperator: GridLogicOperator.Or,
              },
            },
          }}
          slots={{
            toolbar: QuickSearchToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

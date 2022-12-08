import React from 'react';
import { LineageList, RefreshList, UploadButton } from '../../components';

function HomePage() {
  const [value, setValue] = React.useState(null);
  const [selectedLineage, setSelectedLineage] = React.useState(null);

  const handleUpload = (val) => {
    setValue(val);
  };

  const handleSelectLineage = (val) => {
    setSelectedLineage(val);
  };

  if (value) {
    return (
      <>
        <LineageList
          options={value.lineages}
          value={selectedLineage}
          onSelect={handleSelectLineage}
        />
        {selectedLineage !== null && (
          <RefreshList
            options={value.lineages[selectedLineage].refreshes_history}
          />
        )}
      </>
    );
  }
  return <UploadButton onUpload={handleUpload} />;
}

export default HomePage;

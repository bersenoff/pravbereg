import React from "react";
import { Section } from "components";

const Component: React.FC = () => {
  return (
    <Section title="БЛОГ" iconComponent={<i className="fas fa-newspaper"></i>}>
      hello world
    </Section>
  );
}

export default Component;
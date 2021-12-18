import {
  Image,
  Grid,
  Flex,
  useDisclosure,
  Box,
  Collapse,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { fetchEntries } from '../lib/contentful';

export const Skills = ({ skills }) => {
  console.log(skills);
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Div>
      <h1>
        My Skills<span>（Not master）</span>
      </h1>
      <Grid templateColumns="repeat(7, 1fr)" gap={6}>
        {skills.map((skill) => {
          console.log(skill.fields.skillImage.fields.file.url);
          return (
            <Flex direction="column" alignItems="center">
              <h2>{skill.fields.skillName}</h2>
              <Image
                key="skill.fields.skillName"
                justifySelf="center"
                boxSize="150px"
                src={`http:${skill.fields.skillImage.fields.file.url}`}
                onClick={onToggle}
                alt={skill.fields.skillName}
              />
              <Collapse in={isOpen}>{skill.fields.description}</Collapse>
            </Flex>
          );
        })}
      </Grid>
    </Div>
  );
};

const Div = styled.div`
  outline: blue solid 3px;
  width: 100%;
  h1 {
    text-align: center;
    span {
      font-size: 10px;
    }
  }
`;

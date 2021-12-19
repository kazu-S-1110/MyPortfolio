import { Collapse, Image, useDisclosure } from '@chakra-ui/react';

export const Skill = ({ skill }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
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
    </>
  );
};

import { Collapse, Image, Text, useDisclosure } from '@chakra-ui/react';

export const Skill = ({ skill }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        fontWeight={{ base: '300', md: '600' }}
        fontFamily={'sans-serif'}
      >
        {skill.fields.skillName}
      </Text>
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

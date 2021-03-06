import React from 'react';
import styled from 'styled-components';
import StaticProjectBar from './StaticProjectBar'
const ProjectStyles = styled.div`
  outline: none;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
  width: 80%;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
  overflow-y: scroll;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 10px;
  padding-bottom:200px;
  ::-webkit-scrollbar {
    width: 0px;
  }
  /* Large Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthLarge}) {
    width: 83%;
  }
  /* Medium Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    width: 90%;
  }
  /* Small Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    width: 100%;
  }
  h2 {
    font-weight: 900;
    font-size: 32px;
    color: ${props => props.theme.black};
    text-decoration: underline;
    margin-bottom: 10px;
  }
  h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    -webkit-text-stroke: ${props => props.theme.textStroke};
    color: transparent;
    font-size: 28px;
    margin-top: 10px;
    margin-bottom: 0;
  }
  img {
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid ${props => props.theme.black};
  }
  video {
    /* border-radius: 15px; */
    max-height: 400px;
    width: 100%;
    margin-bottom: 10px;
    border-top: 4px solid ${props => props.theme.black};
    border-bottom: 4px solid ${props => props.theme.black};
  }

  div.project-content {
    a{
      color: ${props=>props.theme.linkColor};
    }
    p {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    line-height: 2rem;
    font-family: 'Georgia';
  }
`;

const TagSection = styled.div`
  min-height:50px;
  margin-bottom: auto;
  display: -webkit-box -moz-box -ms-flexbox -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:auto;
  background: ${props => props.theme.lightGrey};
  box-shadow: ${props => props.theme.bsLarge};
  color: ${props => props.theme.black};
  min-width: 50px;
  min-height: 24px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 900;
  @media only screen and (max-width: ${props => props.theme.maxWidthLarge}) {
    font-size: 16px;
    min-height: 20px;
  }
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    min-height: 18px;
    font-size: 14px;
  }
  border-radius: 5px;
  padding-left: 8px;
  padding-right: 8px;
`;

const Project = ({ data }) => {
  const {
    title,
    tags,
    githubLink,
    projectLink,
    titleMediaType,
    titleMedia
  } = data.frontmatter;
  return (
    <ProjectStyles
      className="project"
    >
      <h2>{title}</h2>
      {titleMedia &&
        (titleMediaType === 'img' ? (
          <img src={titleMedia && titleMedia.publicURL} alt={title}></img>
        ) : (
          <video autoPlay loop muted preload="true" controls title={title}>
            <source src={titleMedia && titleMedia.publicURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      {tags && tags.length && (
        <TagSection className="tag-section">
          {tags.map((tag, index) => (
            <Tag className={`tag`} key={`${title}-tag-${index}`}>
              {tag}
            </Tag>
          ))}
        </TagSection>
      )}
      {( githubLink || projectLink) && <StaticProjectBar githubLink={githubLink} projectLink={projectLink}/>}
      <div
        className="project-content"
        dangerouslySetInnerHTML={{ __html: data.html }}
      ></div>
    </ProjectStyles>
  );
};
export default Project;

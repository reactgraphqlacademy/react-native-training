import * as React from 'react'
import * as api from '../config/api'
import { ViewLoading } from '../components'
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Linking
} from 'react-native'
import {
  Paper,
  Button,
  Headline,
  Title,
  Subheading,
  Caption,
  Divider
} from 'react-native-paper'

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.username || 'User Profile'
  })

  state = null

  componentDidMount() {
    this.fetch({ username: this.props.navigation.state.params.username })
  }

  fetch = params => {
    api.fetchUserById(params).then(({ user }) => {
      this.setState({ ...user })
    })
  }

  render() {
    return !this.state ? (
      <ViewLoading />
    ) : (
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{ uri: this.state.avatar_url }}
            style={styles.avatar}
          />
          <Headline>{this.state.name}</Headline>
          <Title>@{this.state.login}</Title>
          <View style={styles.dataItems}>
            <View style={styles.dataItem}>
              <Title>{this.state.public_repos}</Title>
              <Subheading>Public Repos</Subheading>
            </View>
            <View style={styles.dataItem}>
              <Title>{this.state.followers}</Title>
              <Subheading>Followers</Subheading>
            </View>
            <View style={styles.dataItem}>
              <Title>{this.state.following}</Title>
              <Subheading>Following</Subheading>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Paper style={styles.paper}>
            <Caption>Bio:</Caption>
            <Title style={styles.contentValue}>{this.state.bio}</Title>

            <Caption>Company:</Caption>
            <Title style={styles.contentValue}>{this.state.company}</Title>

            <Caption>Location:</Caption>
            <Title style={styles.contentValue}>{this.state.location}</Title>

            <Caption>Blog:</Caption>
            <Title
              style={[styles.contentValue, styles.link]}
              onPress={() => Linking.openURL(this.state.blog)}
            >
              {this.state.blog}
            </Title>
          </Paper>
          <Button
            primary
            raised
            onPress={() => Linking.openURL(this.state.html_url)}
          >
            <Subheading style={styles.lightLabel}>GO TO PROFILE</Subheading>
          </Button>
          {/* <Text>{JSON.stringify(this.state, null, 4)}</Text> */}
        </View>
      </ScrollView>
    )
  }
}

export default ProfileScreen

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 340,
    backgroundColor: '#73CFEF',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  lightLabel: {
    color: '#fff'
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 50,
    margin: 20
  },
  dataItems: {
    flexDirection: 'row',
    margin: 16
  },
  dataItem: {
    flex: 1,
    alignItems: 'center'
  },
  content: { margin: 16 },
  paper: {
    padding: 16,
    elevation: 6,
    marginTop: -72,
    borderRadius: 4,
    marginBottom: 24
  },
  link: {
    color: 'peru'
  },
  contentValue: {
    marginBottom: 20
  }
})

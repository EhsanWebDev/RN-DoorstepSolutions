import React, { Component } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Container from "../../components/Container";
import GeneralText from "../../components/GeneralText";
import Header from "../../components/Header";
import CatComp from "../../components/Home/CategoryCard";
import CategoryItem from "../../components/Home/CategoryItem";
import Pill from "../../components/Pill";
import SearchBar from "../../components/SearchBar";
import StarRatings from "../../components/StarRating";
import Button from "../../components/Button";
import { layout } from "../../constants/theme";

export default class Category extends Component {
  state = {
    modalVisible: false,
  };
  handleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };
  render() {
    const { modalVisible } = this.state;
    return (
      <Container styles={{ flex: 1 }}>
        <Header showBack />
        <SearchBar showFilter onFilterPress={this.handleModal} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Pill active />
          <Pill label="Category 1" />
          <Pill label="Category 2" />
          <Pill label="Category 3" />
          <Pill label="Category 4" />
        </ScrollView>

        <ScrollView style={{ marginVertical: 20 }}>
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ScrollView>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          statusBarTranslucent={true}
          onRequestClose={this.handleModal}
        >
          <TouchableWithoutFeedback onPress={this.handleModal}>
            <View style={styles.centeredView}>
              <Container styles={styles.modalView}>
                <GeneralText mv={20} styles={styles.modalText} bold>
                  Filter
                </GeneralText>
                <Container direction="row" justify="space-between" mh={20}>
                  <GeneralText size={18} styles={styles.modalText}>
                    Average Rating
                  </GeneralText>
                  <GeneralText size={18} styles={styles.modalText}>
                    3.0
                  </GeneralText>
                </Container>

                <Container align="center">
                  <StarRatings stars={3} showCount={false} size={70} />
                </Container>

                <Button
                  label="Apply Changes"
                  br={0}
                  width={layout.width * 0.8}
                  handlePress={this.handleModal}
                />
              </Container>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#313132",
    width: layout.width,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

package bigdata;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class HotelExtractor {
	public static void main(String[] args){
		
		//getPos("dfgh");
	}
public 	String result="Search term not found";
	 public String getPos(String hotel_name) {

			String csvFile = "/Users/arunprakash/Documents/workspace/Big_data/WebContent/charisma-master/hotelInfo.csv";
			BufferedReader br = null;
			String line = "";
			String cvsSplitBy = ",";

			try {

				br = new BufferedReader(new FileReader(csvFile));
				while ((line = br.readLine()) != null) {

				        // use comma as separator
					String[] hotel = line.split(cvsSplitBy);
		if(hotel[1].equals(hotel_name)){
		System.out.println("hotel id"+hotel[0]+ "name " +hotel[1]);
		result=hotel[0].trim()+","+hotel[1].trim();
		break;
		}
		
		//pos=Integer.parseInt(hotel[2]);
		//neg=Integer.parseInt(hotel[3]);
		//getpos(pos);
		//getneg(neg);
		}

				

			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				if (br != null) {
					try {
						br.close();
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
			}
			System.out.println("rsu:"+ result);
			return result;
		  }
}
